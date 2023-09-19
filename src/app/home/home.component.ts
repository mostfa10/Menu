import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  tableOfContents : any[] = []
  currentPageIndex = 0; // Current page index
  itemsPerPage = 5; 

  private isDragging = false;
  private startX = 0;
  private endX = 0;
  
  ngOnInit(): void {
    this.tableOfContents.push({
      title: 'Lunch', 
      list: [
          { name: 'SPICY BEEF BARBECUE', price: 20 },
          { name: 'GRILLED CHICKEN SALAD', price: 15 },
          { name: 'VEGETARIAN PASTA', price: 12 },
          { name: 'SEAFOOD PLATTER', price: 25 },
          // Add more lunch items here
      ]
  },{
      title: 'Coffee', 
      list: [
          { name: 'Espresso', price: 4 },
          { name: 'Cappuccino', price: 5 },
          { name: 'Latte', price: 5 },
          { name: 'Mocha', price: 6 },
          // Add more coffee items here
      ]
  },{
      title: 'Breakfast', 
      list: [
          { name: 'Pancakes with Maple Syrup', price: 8 },
          { name: 'Classic Omelette', price: 10 },
          { name: 'Avocado Toast', price: 7 },
          { name: 'Belgian Waffles', price: 9 },
          // Add more breakfast items here
      ]
  },{
      title: 'Sweets', 
      list: [
          { name: 'Chocolate Cake', price: 6 },
          { name: 'Cheesecake', price: 7 },
          { name: 'Fruit Tart', price: 5 },
          { name: 'Ice Cream Sundae', price: 4 },
          // Add more sweet treats here
      ]
  });
  
  }

   // Number of items to display per page

  // Function to go to the next page
  nextPage() {
    if (this.currentPageIndex < this.tableOfContents.length - 1) {
      this.currentPageIndex++;
    }
  }

  // Function to go to the previous page
  prevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }

  // Function to handle drag start
  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
  }

  // Function to handle drag end
  endDrag(event: MouseEvent) {
    if (this.isDragging) {
      this.endX = event.clientX;
      const deltaX = this.endX - this.startX;

      // Determine drag direction (previous or next)
      if (deltaX > 0) {
        this.prevPage();
      } else {
        this.nextPage();
      }

      this.isDragging = false;
    }
  }

  // Function to prevent default drag behavior (if needed)
  preventDefault(event: DragEvent) {
    event.preventDefault();
  }
}
