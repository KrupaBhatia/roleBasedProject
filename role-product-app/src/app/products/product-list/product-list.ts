import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.js';
import { Auth } from '../../auth/auth.js'; 
import { ToastService } from '../../core/services/toast.js';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList implements OnInit {
  products: Product[] = [];
  admin: boolean = false;
  displayedColumns: string[] = [];

  constructor(private productService: Product, private auth: Auth) {}

  ngOnInit(): void {
    this.admin = this.auth.isAdmin();

    this.displayedColumns = this.admin
      ? ['name', 'price', 'description', 'actions']
      : ['name', 'price', 'description'];

    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res.data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  delete(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
    }
  }
  
}
