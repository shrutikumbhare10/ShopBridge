import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbridgeHomeComponent } from './shopbridge-home.component';

describe('ShopbridgeHomeComponent', () => {
  let component: ShopbridgeHomeComponent;
  let fixture: ComponentFixture<ShopbridgeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbridgeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbridgeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
