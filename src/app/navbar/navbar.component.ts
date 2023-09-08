import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
        {
          label: 'Agence',
          icon: 'pi pi-fw pi-home',
          items: [
            {
              label: 'Collaborateurs',
              icon: 'pi pi-fw pi-users',
              routerLink: "/collaborteurs",
              routerLinkActiveOptions: { exact: true }
            },
            {
              label: 'Informations générales',
              icon: 'pi pi-fw pi-book',
              routerLink: "/informations-agence",
              routerLinkActiveOptions: { exact: true }
            },
            {
              separator: true,
            },
            {
              label: 'Déconnection',
              icon: 'pi pi-fw pi-power-off',
              routerLink: "/quit",
            },
          ],
        },
        {
          label: 'Dossiers',
          icon: 'pi pi-fw pi-folder',
          items: [
            {
              label: 'Dossiers en cours',
              icon: 'pi pi-fw pi-folder-open',
              routerLink: "/dossiers-immo-encours",
              routerLinkActiveOptions: { exact: true }
            },
            {
              label: 'Dossiers clos',
              icon: 'pi pi-fw pi-folder',
              routerLink: "/dossiers-immo-clos",
              routerLinkActiveOptions: { exact: true }
            },
            {
              label: 'Dossiers annulés',
              icon: 'pi pi-fw pi-times-circle',
              routerLink: "/dossiers-immo-annules",
              routerLinkActiveOptions: { exact: true }
            },
            {
              label: 'Tous les dossiers',
              icon: 'pi pi-fw pi-server',
              routerLink: "/dossiers-immo",
              routerLinkActiveOptions: { exact: true }
            },
          ],
        },
        {
          label: 'Mon compte',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'Editer',
              icon: 'pi pi-fw pi-pencil',
              routerLink: "/moncompte-edit",
              routerLinkActiveOptions: { exact: true }
            },
            {
              label: 'Déconnecter',
              icon: 'pi pi-fw pi-power-off',
              routerLink: "/quit",
            },
          ],
        },
        {
          label: 'Finances',
          icon: 'pi pi-fw pi-dollar',
          items: [
            {
              label: 'Commissions percues',
              icon: 'pi pi-fw pi-plus-circle',
              routerLink: "/commission-percues",
              routerLinkActiveOptions: { exact: true }
            },
            {
              label: 'Commissions versées',
              icon: 'pi pi-fw pi-minus-circle',
              routerLink: "/commission-versees",
              routerLinkActiveOptions: { exact: true }
            },
            {
              label: 'Analyses et graphiques',
              icon: 'pi pi-fw pi-chart-bar',
              routerLink: "/analyses-graphiques",
              routerLinkActiveOptions: { exact: true }
            },
            {
              label: 'Archives',
              icon: 'pi pi-fw pi-calendar-times',
              routerLink: "/archives",
              routerLinkActiveOptions: { exact: true }
            },
          ],
        },
        {
          label: 'Déconnection',
          icon: 'pi pi-fw pi-power-off',
          routerLink: "/quit",
        },
      ];
  }
}
