import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUnitlChangedComponent } from './distinct-unitl-changed.component';

describe('DistinctUnitlChangedComponent', () => {
  let component: DistinctUnitlChangedComponent;
  let fixture: ComponentFixture<DistinctUnitlChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctUnitlChangedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistinctUnitlChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
