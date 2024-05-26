import { DataSource } from 'typeorm';
// import { Seeder, Factory } from 'typeorm-seeding';
import { ClientEntity } from '../src/client/entities/client.entity';
import {
  EmployeeEntity,
  EmployeePosition,
} from '../src/employee/entities/employee.entity';
// import { OrderEntity } from '../src/order/entities/order.entity';
// import { InvoiceEntity } from '../src/invoice/entities/invoice.entity';
import { TypeEntity } from '../src/type/entities/type.entity';
import { ServiceEntity } from '../src/service/entities/service.entity';

import dataSourcePg from '../database/data-source';

const seed = async () => {
  const connection: DataSource = await dataSourcePg.initialize();
  const clientRepository = connection.getRepository(ClientEntity);
  const employeeRepository = connection.getRepository(EmployeeEntity);
  const typeRepository = connection.getRepository(TypeEntity);
  const serviceRepository = connection.getRepository(ServiceEntity);

  const clients = [
    {
      fullName: 'Client 1',
      contactNumber: '0912345678',
      email: 'a@a.com',
      password: '123456',
    },
    {
      fullName: 'Client 2',
      contactNumber: '0912345678',
      email: 'b@b.com',
      password: '123456',
    },
    {
      fullName: 'Client 3',
      contactNumber: '0912345678',
      email: 'c@c.com',
      password: '123456',
    },
    {
      fullName: 'Client 4',
      contactNumber: '0912345678',
      email: 'd@d.com',
      password: '123456',
    },
    {
      fullName: 'Client 5',
      contactNumber: '0912345678',
      email: 'e@e.com',
      password: '123456',
    },
  ];
  const employees = [
    {
      fullName: 'John Doe',
      contactNumber: '123456789',
      email: 'john.doe@example.com',
      password: 'securepassword',
      position: EmployeePosition.ADMIN,
      salary: 20000.0,
    },
    {
      fullName: 'Jane Smith',
      contactNumber: '987654321',
      email: 'jane.smith@example.com',
      password: 'securepassword',
      position: EmployeePosition.MODERATOR,
      salary: 18000.0,
    },
    {
      fullName: 'Alice Johnson',
      contactNumber: '567890123',
      email: 'alice.johnson@example.com',
      password: 'securepassword',
      position: EmployeePosition.EMPLOYEE,
      salary: 15000.0,
    },
    {
      fullName: 'Bob Brown',
      contactNumber: '456789012',
      email: 'bob.brown@example.com',
      password: 'securepassword',
      position: EmployeePosition.EMPLOYEE,
      salary: 15000.0,
    },
  ];
  const types = [
    {
      title: 'Мийка автомобіля',
    },
    {
      title: 'Ремонт та обслуговування',
    },
    {
      title: 'Обслуговування шин',
    },
    {
      title: 'Електричні роботи',
    },
    {
      title: 'Кузовні роботи',
    },
    {
      title: 'Обслуговування двигуна',
    },
  ];
  const services = [
    {
      title: 'Швидка мийка (зовнішня чистка)',
      price: 1000,
      description:
        'Швидко та якісно видаляє бруд і забруднення з зовнішньої поверхні автомобіля.',
      typeId: 1,
    },
    {
      title: 'Повна мийка автомобіля (зовнішня та внутрішня)',
      price: 1100,
      description:
        'Комплексне миття автомобіля з якісною очисткою зовнішньої та внутрішньої частини.',
      typeId: 1,
    },
    {
      title: 'Хімчистка салону автомобіля',
      price: 1500,
      description:
        'Професійна хімчистка салону автомобіля з видаленням плям і неприємних запахів.',
      typeId: 1,
    },
    {
      title: 'Діагностика двигуна',
      price: 4300,
      description:
        'Повна перевірка роботи двигуна та виявлення можливих несправностей.',
      typeId: 2,
    },
    {
      title: 'Ремонт гальмівної системи',
      price: 5400,
      description:
        'Професійний ремонт та налагодження гальмівної системи для безпеки на дорозі.',
      typeId: 2,
    },
    {
      title: 'Ремонт та заміна амортизаторів',
      price: 4000,
      description:
        'Заміна зношених амортизаторів та ремонт системи підвіски для комфортної їзди.',
      typeId: 2,
    },
    {
      title: 'Виправлення дрібних ушкоджень кузова',
      price: 5000,
      typeId: 2,
      description:
        'Косметичний ремонт та виправлення невеликих пошкоджень кузова автомобіля.',
    },
    {
      title: 'Заміна мастила та фільтрів',
      price: 2000,
      typeId: 3,
      description:
        'Регулярне технічне обслуговування двигуна заміною мастила та фільтрів.',
    },
    {
      title: 'Заміна шин та балансування шин',
      price: 1500,
      typeId: 3,
      description:
        'Заміна зношених шин та балансування коліс для комфортної їзди.',
    },
    {
      title: 'Ремонт проколів',
      price: 800,
      typeId: 3,
      description:
        'Швидкий та якісний ремонт проколів для уникнення проблем на дорозі.',
    },
    {
      title: 'Перевірка тиску в шинах',
      price: 300,
      typeId: 3,
      description:
        'Регулярна перевірка тиску в шинах для забезпечення безпеки та тривалості служби шин.',
    },
    {
      title: 'Заміна зношених шин',
      price: 1800,
      typeId: 3,
      description:
        'Заміна старих та зношених шин на нові, що відповідають потребам вашого автомобіля.',
    },
    {
      title: 'Діагностика та ремонт електропроводки',
      price: 4500,
      typeId: 4,
      description:
        'Повна перевірка та ремонт електропроводки для забезпечення стабільної роботи всіх електричних систем.',
    },
    {
      title: 'Встановлення та налаштування автомобільної сигналізації',
      price: 2500,
      typeId: 4,
      description:
        'Професійне встановлення та налаштування сучасних систем автомобільної сигналізації.',
    },
    {
      title: 'Встановлення системи відеоспостереження',
      price: 4000,
      typeId: 4,
      description:
        'Встановлення відеоспостереження для забезпечення безпеки вашого автомобіля.',
    },
    {
      title: 'Заміна та обслуговування акумулятора',
      price: 2200,
      typeId: 4,
      description:
        'Заміна старого акумулятора на новий та його обслуговування для надійної роботи електричної системи.',
    },
    {
      title: 'Покраска автомобіля',
      price: 10000,
      typeId: 5,
      description:
        'Комплексна покраска автомобіля для відновлення його зовнішнього вигляду.',
    },
    {
      title: 'Реставрація кузова після ДТП',
      price: 15000,
      typeId: 5,
      description:
        'Ремонт та відновлення кузова автомобіля після дорожньо-транспортної пригоди.',
    },
    {
      title: 'Встановлення та ремонт бамперів',
      price: 3500,
      typeId: 5,
      description:
        'Встановлення нових бамперів або ремонт старих для відновлення естетики автомобіля.',
    },
    {
      title: 'Ремонт та заміна масла',
      price: 600,
      typeId: 6,
      description:
        'Регулярний технічний обслуговування двигуна заміною мастила для забезпечення його надійної роботи.',
    },
    {
      title: 'Заміна поршнів',
      price: 7000,
      typeId: 6,
      description:
        'Заміна старих та зношених поршнів на нові для підвищення продуктивності двигуна.',
    },
    {
      title: 'Заміна підшипників',
      price: 4000,
      typeId: 6,
      description:
        'Заміна зношених підшипників на нові для забезпечення стабільної роботи всіх важливих вузлів.',
    },
  ];
  for (const service of services) {
    const newService = serviceRepository.create(service);
    await serviceRepository.save(newService);
  }
  for (const type of types) {
    const newType = typeRepository.create(type);
    await typeRepository.save(newType);
  }
  for (const employee of employees) {
    const newEmployee = employeeRepository.create(employee);
    await employeeRepository.save(newEmployee);
  }
  for (const client of clients) {
    const newClient = clientRepository.create(client);
    await clientRepository.save(newClient);
  }

  await dataSourcePg.destroy();
};
export default seed;
