import {Component, Injectable, OnInit, ViewContainerRef, ViewChild, ElementRef} from "@angular/core";
import { EventData, ScrollView, SwipeGestureEventData } from '@nativescript/core';



@Component({
  selector: "Items",
  //moduleId: module.id,
  templateUrl: "./items.component.html"
})

@Injectable()
export class ItemsComponent implements OnInit {



  @ViewChild("scrollView", { static: false }) scrollView: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCreate() {
  }

  getDate() {
  }

  onTap() {
    alert("Tap!");
  }





}
