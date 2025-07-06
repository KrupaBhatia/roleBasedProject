import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.js';
import { ToastService } from '../../core/services/toast.js';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss'
})
export class ProductForm implements OnInit {
  productForm!: FormGroup;
  isEditMode = false;
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: Product,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]]
    });

    this.productId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.productId;

    if (this.isEditMode) {
      this.productService.getProductById(this.productId!).subscribe({
        next: (res) => {
          this.productForm.patchValue(res.data);
        },
        error: (err) => {
          console.error('Error fetching product:', err);
          this.toast.error('Failed to load product data');
        }
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const productData = this.productForm.value;

    if (this.isEditMode) {
      this.productService.updateProduct(this.productId!, productData).subscribe({
        next: () => {
          this.toast.success('Product updated successfully');
          this.router.navigate(['/products']);
        },
        error: () => {
          this.toast.error('Failed to update product');
        }
      });
    } else {
      this.productService.createProduct(productData).subscribe({
        next: () => {
          this.toast.success('Product created successfully');
          this.router.navigate(['/products']);
        },
        error: () => {
          this.toast.error('Failed to create product');
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
