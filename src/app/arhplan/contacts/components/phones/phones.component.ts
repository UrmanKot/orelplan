import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

export class Department {
  id: number;
  departmentName: string;
  divisions: Division[];
}

export class Division {
  name: string;
  employee: string;
  email: string;
  phone: string;
  extensionPhone: number | null;
  cabinet: string;
}

@Component({
  selector: 'arh-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})

export class PhonesComponent implements OnInit {

  panelOpenState = false;
  departments: Department[];

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(`Телефоны - БУ ОО «Орелархплан»`)
  }

  ngOnInit(): void {
    this.departments = [
      {
        id: 1,
        departmentName: 'Руководство',
        divisions: [
          {
            name: 'Директор',
            employee: 'Сенюшкин Виктор Владимирович',
            email: 'vvs@orelarhplan@yandex.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 104,
            cabinet: '63',
          }, {
            name: 'Приемная',
            employee: 'Чернова Наталья Олеговна',
            email: 'noch@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 104,
            cabinet: '63',
          }
        ]
      }, {
        id: 2,
        departmentName: 'Отдел правового и кадрового обеспечения',
        divisions: [
          {
            name: 'Заместитель директора по правовым вопросам - начальник отдела',
            employee: 'Кузнецов Евгений Александрович',
            email: 'eak@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 103,
            cabinet: '62',
          }, {
            name: 'Главный специалист',
            employee: 'Джомардян Татьяна Васильевна',
            email: 'tvd@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 107,
            cabinet: '62',
          }
        ]
      }, {
        id: 3,
        departmentName: 'Отдел бухгалтерского учета, закупок и смет',
        divisions: [
          {
            name: 'Главный бухгалтер - начальник отдела',
            employee: 'Аристова Юлия Геннадьевна',
            email: 'yga@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 102,
            cabinet: '65',
          }, {
            name: 'Заместитель главного бухгалтера',
            employee: 'Курохтина Лариса Николаевна',
            email: 'lnk@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 102,
            cabinet: '65',
          }
        ]
      }, {
        id: 4,
        departmentName: 'Отдел информационных технологий и информационной безопасности',
        divisions: [
          {
            name: 'Начальник отдела',
            employee: 'Журавлев Сергей Васильевич',
            email: 'svz@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 106,
            cabinet: '72',
          }
        ]
      },{
        id: 5,
        departmentName: 'Отдел геоинформационного обеспечения градостроительной деятельности',
        divisions: [
          {
            name: 'Начальник отдела',
            employee: 'Мосеева Мария Евгеньевна',
            email: 'mem@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 105,
            cabinet: '69Б',
          }, {
            name: 'Заместитель начальника отдела',
            employee: 'Ежов Дмитрий Евгеньевич',
            email: 'ede@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 105,
            cabinet: '69Б',
          }
        ]
      }, {
        id: 6,
        departmentName: 'Отдел землеустройства и кадастровых работ',
        divisions: [
          {
            name: 'Начальник отдела',
            employee: 'Перелыгин Евгений Владимирович',
            email: 'evp@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 109,
            cabinet: '73',
          }, {
            name: 'Заместитель начальника отдела',
            employee: 'Калитина Лариса Анатольевна',
            email: 'lak@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 109,
            cabinet: '73',
          }
        ]
      }, {
        id: 7,
        departmentName: 'Отдел разработки документации по планировке территории',
        divisions: [
          {
            name: 'Начальник отдела',
            employee: 'Пааташвили Аркадий Эдуардович',
            email: 'aep@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: null,
            cabinet: '64',
          }
        ]
      }, {
        id: 8,
        departmentName: 'Отдел геодезии, картографии и пространственных данных',
        divisions: [
          {
            name: 'Заместитель директора - начальник отдела',
            employee: 'Семиделихин Сергей Владимирович',
            email: 'svs@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 109,
            cabinet: '73',
          }, {
            name: 'Заместитель начальника отдела',
            employee: 'Тапехина Светлана Ивановна',
            email: 'sit@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 109,
            cabinet: '73',
          }
        ]
      }, {
        id: 9,
        departmentName: 'Отдел разработки градостроительной документации',
        divisions: [
          {
            name: 'Начальник отдела',
            employee: 'Рожков Михаил Николаевич',
            email: 'mnr@orelarhplan.ru',
            phone: '+7 (4862) 44-35-02',
            extensionPhone: 108,
            cabinet: '64',
          }
        ]
      }
    ];
  }

}
