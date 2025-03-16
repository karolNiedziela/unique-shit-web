import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  SelectComponent,
  SelectOptionType,
} from '../../shared/components/select/select.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  Colour,
  ItemCondition,
  Manufacturer,
  OfferFilters,
  ProductCategory,
} from './models/offer-filters';
import { OfferService } from './services/offer.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-offers',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    SelectComponent,
    MatGridListModule,
    MatCardModule,
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
  standalone: true,
})
export class OffersComponent implements OnInit {
  sortOptions: SelectOptionType[] = [
    { id: 1, value: 'Latest' },
    { id: 2, value: 'Oldest' },
  ];

  productCategoryOptions: SelectOptionType[] = [];
  colourOptions: SelectOptionType[] = [];
  itemConditionOptions: SelectOptionType[] = [];
  manufacturerOptions: SelectOptionType[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offerService.getFilters().subscribe({
      next: (offerFilters: OfferFilters) => {
        console.log(offerFilters);
        this.productCategoryOptions = offerFilters.productCategories.map(
          (productCategory: ProductCategory) => ({
            id: productCategory.id,
            value: productCategory.name,
          })
        );
        this.colourOptions = offerFilters.colours.map((colour: Colour) => ({
          id: colour.id,
          value: colour.name,
        }));
        this.itemConditionOptions = offerFilters.itemConditions.map(
          (itemCondtion: ItemCondition) => ({
            id: itemCondtion.id,
            value: itemCondtion.name,
          })
        );
        this.manufacturerOptions = offerFilters.manufacturers.map(
          (manufacturer: Manufacturer) => ({
            id: manufacturer.id,
            value: manufacturer.name,
          })
        );
      },
      error: (error) => {
        console.error('Error fetching filters:', error);
      },
      complete: () => {
        console.log('Filter fetching complete');
      },
    });
  }

  onSortChange(value: string): void {
    console.log('Sort changed:', value);
  }

  onColourChange(value: string): void {
    console.log('Colour changed:', value);
  }

  onProductCategoryChange(value: string): void {
    console.log('Product category changed:', value);
  }

  onItemConditionChange(value: string): void {
    console.log('Item condition changed:', value);
  }

  onManufacturerChanged(value: string): void {
    console.log('Manufacturer changed:', value);
  }

  onSizeChange(value: string): void {
    console.log('Size changed:', value);
  }
}
