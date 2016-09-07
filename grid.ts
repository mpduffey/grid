import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector:			'grid',
	inputs:				['rows: rows', 'columns: columns'],
	template:	`
		<div *ngIf="showPageSize">Records: 
			<select>
				<option value="10">10</option>
				<option value="25">25</option>
				<option value="50">50</option>
			</select>
		</div>
		<table class="table table-striped table-condensed">
			<thead><tr><td *ngFor="let col of columns"><a (click)="sort(col.name)">{{col.descr}}</a></td></tr></thead>
			<tbody><tr *ngFor="let row of rows"><td *ngFor="let col of columns">{{row[col.name]}}</td></tr></tbody>
		</table>
	`,
	styles:				[`
		table {
			font-size: 12px;
		}
		thead td {
			cursor: pointer;
		}
		select {
			color: black;
		}
	`],
	changeDetection:	ChangeDetectionStrategy.OnPush
})

export class Grid {
    columns:Array<Column>;
    rows:Array<any>;
    @Input() name:string;
		@Input("show-page-size") showPageSize = false;
    sorter = new Sorter();
    sort(key){
        this.sorter.sort(key, this.rows);
    }
}
export class Column {
	name: string;
	descr: string;
	constructor(name,descr){
		this.name = name;
		this.descr = descr;
	}
}
export class Sorter{
	direction:number;
	key:string;
	constructor(){
		this.direction = 1;
	}
	sort(key,data){
		if(this.key === key){
			this.direction = this.direction * -1;
		} else {
			this.direction = 1;
		}
		this.key = key;
		data.sort((a,b) => {
			if(a[key] === b[key]){
				return 0;
			} else if(a[key] > b[key]) {
				return 1 * this.direction;
			} else {
				return -1 * this.direction;
			}
		});
	}
}