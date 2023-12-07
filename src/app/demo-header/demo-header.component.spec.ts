import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHeaderComponent } from './demo-header.component';

describe('DemoHeaderComponent', () => {
  let component: DemoHeaderComponent;
  let fixture: ComponentFixture<DemoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
