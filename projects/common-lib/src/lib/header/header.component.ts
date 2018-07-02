import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavItem } from '../@model/nav-item.model';

@Component({
  selector: 'canyalib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Native,
})

export class HeaderComponent implements OnInit {

  _logo: any = {
    href: '#',
    src: 'https://canya.com/assets/img/logo.svg',
    alt: 'CanYa Logo',
    onClick: null
  }

  _navItems: Array<NavItem> = [
    new NavItem('https://blog.canya.com.au/', 'header.blog'),
    new NavItem('https://forum.canya.io', 'header.forum'),
    new NavItem('https://t.me/joinchat/GI97FhDD1lf6dh-r9XRdvA', 'header.telegram'),
  ]

  _buttons: Array<NavItem> = []
  _anchorButtons: Array<NavItem> = []

  @Input()
  set logo(logo: any) {
    this._logo.src = logo.src
    this._logo.alt = logo.alt
    this._logo.href = logo.href
    this._logo.routerLink = logo.routerLink
    this._logo.onClick = logo.onClick
  }

  @Input()
  set navItems(navItems: Array<any>) {
    navItems.forEach(navItem => {
      let _navItem = new NavItem(navItem.href, navItem.innerHtml)

      _navItem.class = navItem.class
      _navItem.replace = navItem.replace
      _navItem.onClick = navItem.onClick
      _navItem.routerLink = navItem.routerLink

      this._navItems[navItem.index] = _navItem
    })
  }

  @Input()
  set buttons(buttons: Array<any>) {
    buttons.forEach(navItem => {
      let _navItem = new NavItem(navItem.href, navItem.innerHtml)

      _navItem.class = navItem.class
      _navItem.replace = navItem.replace
      _navItem.onClick = navItem.onClick
      _navItem.routerLink = navItem.routerLink

      this._buttons[navItem.index] = _navItem
    })
  }

  @Input()
  set anchorButtons(anchorButtons: Array<any>) {
    anchorButtons.forEach(navItem => {
      let _navItem = new NavItem(navItem.href, navItem.innerHtml)

      _navItem.class = navItem.class
      _navItem.replace = navItem.replace
      _navItem.onClick = navItem.onClick
      _navItem.routerLink = navItem.routerLink

      this._anchorButtons[navItem.index] = _navItem
    })
  }

  constructor() {}

  ngOnInit() {}

  onClick(fn: any){
    if (!fn) return false

    let ref = fn[0]
    let fnName = fn[1]
    let args = fn[2]

    ref[fnName].apply(ref, args)
  }

}
