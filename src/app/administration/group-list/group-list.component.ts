import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../group.service';
import { Group } from '../../model/group';
import { forEach } from '@angular/router/src/utils/collection';

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

	groups: Group[];

	tiles = [
		{text: 'One', cols: 1, rows: 1, color: 'lightblue'},
		{text: 'Two', cols: 1, rows: 1, color: 'lightgreen'}
	];

	getGroups() {
		this.groupService.getGroups().subscribe(response => {
			this.groups = response.body
			this.groups.forEach((group) => {
				this.tiles.push({text: group.name, cols: 1, rows: 1, color: 'lightblue'})
				this.tiles.push({text: 'Actions', cols: 1, rows: 1, color: 'lightblue'})
			})
		})
	}

  	createForm(){
		this.addGroupForm = this.fb.group({
			name: ['', Validators.required]
		});
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
