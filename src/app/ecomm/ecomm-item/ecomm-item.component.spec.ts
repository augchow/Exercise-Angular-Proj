import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommItemComponent } from './ecomm-item.component';

describe('EcommItemComponent', () => {
  let component: EcommItemComponent;
  let fixture: ComponentFixture<EcommItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
