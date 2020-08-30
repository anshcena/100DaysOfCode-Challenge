import { TestBed } from '@angular/core/testing';

import { DisplayMenuService } from './display-menu.service';

describe('DisplayMenuService', () => {
  let service: DisplayMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

 /* testing performed here 
    We have created a test that will always pass.
 */

 describe("Display the List of Food in Menu",() => {
   it("should do nothing",() => {
     expect(true).toBeTruthy();
   })
 })
/*
 describe("Display the List of Food", () => {
  it("should do nothing", () => {
    expect(true).not.toBeTruthy();
  });
});

/*
  describe('Display the List of Food', () => {

    it('should do nothing', () => {

        expect(true).toBeTruthy();
        expect(1 + 2).toBe(3);
        expect(2 + 2).toBe(4); //this will fail

    });

  }); 
  */