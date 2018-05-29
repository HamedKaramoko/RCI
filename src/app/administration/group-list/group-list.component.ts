import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../group.service';
import { Group } from '../../model/group';
import { forEach } from '@angular/router/src/utils/collection';
import {MatTableDataSource, MatPaginator, MatSort, MatTable} from '@angular/material';
import { FetchTableDataService } from '../../fetch-table-data.service';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of, merge } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatTable) table: MatTable<Object>;

	url: string = 'RCI/group/list'
	addGroupForm: FormGroup;

	currentGroup:Group;

	groups: Group[];

	displayedColumns = ['position', 'name', 'action'];
	resultsLength = 0;
	isLoadingResults = true;
	isRateLimitReached = false;
	dataSource = [];

	constructor(private fb: FormBuilder, private groupService: GroupService, private fetchTableDataService: FetchTableDataService) { }

	ngOnInit() {
		this.createForm();
		this.getGroups();
		merge(this.sort.sortChange, this.paginator.page).pipe(
			startWith({}),
			switchMap(() => {
				this.isLoadingResults = true;
				return this.fetchTableDataService!.fetch(this.url);
			}),
			map((data: Group[]) => {
				// Flip flag to show that loading has finished.
				this.isLoadingResults = false;
				this.isRateLimitReached = false;
				this.resultsLength = data.length;

				return data;
			}),
			catchError(() => {
				this.isLoadingResults = false;
				// Catch if the GitHub API has reached its rate limit. Return empty data.
				this.isRateLimitReached = true;
				return of([]);
			})
		).subscribe(data => this.dataSource = data);
	}

	/*applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}*/

	getGroups() {
		this.groupService.getGroups().subscribe(response => {
			this.groups = response.body
			//this.dataSource = []
			this.table.dataSource = this.dataSource;
			this.table.renderRows()
			this.groups.forEach((group) => {
				this.dataSource.push({
					position: 1,
					name: group.name,
					action: "hey"
				})
			})
			//this.dataSource = new MatTableDataSource(this.tableData);
		})
	}

	update(element: Group){
		this.currentGroup = element
		this.setFormGroup(element)
	}

	delete(element: Group){
		// Show dialog
		this.groupService.deleteGroup(element.name).subscribe(() => {
			//console.log("Group deleted: ", name);
			this.getGroups()
		});
	}

  	createForm(){
		this.addGroupForm = this.fb.group({
			name: ['', Validators.required]
		});
	}

	setFormGroup(element: Group) {
		this.addGroupForm.setValue({
			name: element.name
		})
	}

	onSubmit(){
		let formModel = this.addGroupForm.value;

		let group:Group = {
			id: 0,
			name: formModel.name
		}

		// Http call
		this.groupService.saveGroup(group).subscribe(data => {
			console.log(JSON.stringify(data))
			let i = this.table.dataSource;
		}, error => {
			console.error("I got an error: ", error)
		})
	}

}
