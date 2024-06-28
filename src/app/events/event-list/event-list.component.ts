import { Component, OnInit } from '@angular/core';

interface Event {
  image: string;
  title: string;
  date: Date;
  location: string;
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [
    {
      image: 'assets/images/event1.jfif',
      title: 'Festa Sunset',
      date: new Date('2024-07-15'),
      location: 'Praia de Copacabana, RJ'
    },
    {
      image: 'assets/images/event2.jpg',
      title: 'Balada Eletrônica',
      date: new Date('2024-08-10'),
      location: 'Clube XYZ, SP'
    },
    {
      image: 'assets/images/event3.jpg',
      title: 'Festa Sunset',
      date: new Date('2024-07-15'),
      location: 'Praia de Copacabana, RJ'
    },
    {
      image: 'assets/images/event4.jpg',
      title: 'Balada Eletrônica',
      date: new Date('2024-08-10'),
      location: 'Clube XYZ, SP'
    },
    {
      image: 'assets/images/event5.jpg',
      title: 'Balada Eletrônica',
      date: new Date('2024-08-10'),
      location: 'Clube XYZ, SP'
    },
    {
      image: 'assets/images/event2.jfif',
      title: 'Festa Sunset',
      date: new Date('2024-07-15'),
      location: 'Praia de Copacabana, RJ'
    },
    {
      image: 'assets/images/event2.jpg',
      title: 'Balada Eletrônica',
      date: new Date('2024-08-10'),
      location: 'Clube XYZ, SP'
    },
    {
      image: 'assets/images/event3.jpg',
      title: 'Festa Sunset',
      date: new Date('2024-07-15'),
      location: 'Praia de Copacabana, RJ'
    },
    {
      image: 'assets/images/event4.jpg',
      title: 'Balada Eletrônica',
      date: new Date('2024-08-10'),
      location: 'Clube XYZ, SP'
    },
    {
      image: 'assets/images/event5.jpg',
      title: 'Balada Eletrônica',
      date: new Date('2024-08-10'),
      location: 'Clube XYZ, SP'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
