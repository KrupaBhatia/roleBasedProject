import { Component, OnInit } from '@angular/core';
import { Product } from '../product.js';
import { Auth } from '../../auth/auth.js'; 
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit {
  products: any[] = [];
  admin: boolean = false;

  constructor(private productService: Product,private auth: Auth,) {}

  ngOnInit(): void {
    this.admin = this.auth.isAdmin();  
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res.data;
        console.log(this.products, "23");
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  delete(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.loadProducts(); // refresh after delete
        },
        error: (err) => {
          console.error('Error deleting product:', err);
        }
      });
    }
  }
}
