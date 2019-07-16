import {MenuComponent} from './menu.component';

describe('MenuComponent testing', () => {
  let menuComponent: MenuComponent;
  beforeEach( () => {
  menuComponent = new MenuComponent();
});
  it('Default value isOpen should be false', () => {
    expect(menuComponent.isOpen).toBe(false);
  });
  it ('Menu showMenu should change isOpen to true', () => {
    menuComponent.showMenu();
    expect(menuComponent.isOpen).toBe(true);
  });
  it ('Menu hideMenu should change isOpen to false', () => {
    menuComponent.hideMenu();
    expect(menuComponent.isOpen).toBe(false);
  });
});

// 28-testing-service
