import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../group.service';
import { Group } from '../../model/group';
import { forEach } from '@angular/router/src/utils/collection';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

	constructor(private fb: FormBuilder, private groupService: GroupService) { }

	ngOnInit() {
		this.createForm();
		this.getGroups();
	}

	addGroupForm: FormGroup;

	currentGroup:Group;

	groups: Group[];

	tableData = []

	displayedColumns = ['position', 'name', 'action'];
	dataSource = ELEMENT_DATA;

	/*applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}*/

	getGroups() {
		this.groupService.getGroups().subscribe(response => {
			this.groups = response.body
			this.groups.forEach((group) => {
				this.tableData.push({
					position: 1,
					name: group.name,
					action: "hey"
				})
			})
			this.dataSource = this.tableData;
			//this.dataSource = new MatTableDataSource(this.tableData);
		})
	}

	update(element: Group){
		this.currentGroup = element
		this.setFormGroup(element)
	}

	delete(element: Group){
		// Show dialog
		this.groupService.deleteGroup(element.name);
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
		}, error => {
			console.error("I got an error: ", error)
		})
	}

}

const ELEMENT_DATA= [
	{position: 1, name: 'Hydrogen'},
	{position: 2, name: 'Helium'},
	{position: 3, name: 'Lithium'},
	{position: 4, name: 'Beryllium'},
	{position: 5, name: 'Boron'},
	{position: 6, name: 'Carbon'},
	{position: 7, name: 'Nitrogen'},
	{position: 8, name: 'Oxygen'},
	{position: 9, name: 'Fluorine'},
	{position: 10, name: 'Neon'},
  ];
