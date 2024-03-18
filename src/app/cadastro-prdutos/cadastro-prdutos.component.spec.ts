import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPrdutosComponent } from './cadastro-prdutos.component';

describe('CadastroPrdutosComponent', () => {
  let component: CadastroPrdutosComponent;
  let fixture: ComponentFixture<CadastroPrdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPrdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPrdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
