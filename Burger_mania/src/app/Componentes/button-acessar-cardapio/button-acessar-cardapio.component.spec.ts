import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAcessarCardapioComponent } from './button-acessar-cardapio.component';

describe('ButtonAcessarCardapioComponent', () => {
  let component: ButtonAcessarCardapioComponent;
  let fixture: ComponentFixture<ButtonAcessarCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAcessarCardapioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAcessarCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
