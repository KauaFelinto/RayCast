import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctivityComponent } from './prodctivity.component';

describe('ProdctivityComponent', () => {
  let component: ProdctivityComponent;
  let fixture: ComponentFixture<ProdctivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdctivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdctivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
