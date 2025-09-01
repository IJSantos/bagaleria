import { Injectable } from '@angular/core';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houses: House[] = [
    {
      id: 1,
      title: 'Casa em Arraial D`Ajuda - Brasil',
      city: 'Arraial d Ajuda',      
      description: 'Desfrute de momentos inesquecíveis em nossa casa em Arraial Dajuda! Relaxe na piscina enquanto aproveita a brisa do mar, em uma localização privilegiada, a poucos passos da praia. Com quartos climatizados e uma sala de estar confortável, é o lugar perfeito para recarregar as energias.',
      price: 1200000,
      bedrooms: 4,
      bathrooms: 2,
      area: 250,
      images: ['assets/images/houses/g-img-2.JPG', 'assets/images/houses/g-img-1.JPG', 'assets/images/houses/g-img-3.JPG'],
      pdfUrl: 'https://drive.google.com/file/d/1K0Tq4UmQ7TjED0-ypMmdvKppP_TI1fBs/view?usp=drive_link',
      amenities: ['Piscina', 'Varanda', 'Garagem']
    },
    {
      id: 2,
      title: 'Casa espetacular em Cumuruxatiba - Bahia',
      city: 'Cumuruxatiba',
      description: 'Casa no Condomínio Pôr do Sol, no bairro Morro da Fumaça com 2 quartos, cozinha, banheiro, área externa para uso e garagem. A casa é mobiliada e equipada com eletrodomésticos. Casa ideal para quem busca tranquilidade e contato com a natureza. Faça download do arquivo para mais informações',
      price: 1200000,
      bedrooms: 2,
      bathrooms: 1,
      area: 150,
      images: ['assets/images/houses/d-img-1.jpg', 'assets/images/houses/d-img-2.jpg', 'assets/images/houses/d-img-3.jpg'],
      pdfUrl: 'https://drive.google.com/file/d/1To1TPqiMYbXhUVlBr7lU1EpiuXbjf91X/view?usp=drive_link',
      amenities: ['Piscina', 'Varanda', 'Garagem']
    },
    {
      id: 3,
      title: 'Casa nova e aconchegante em Cumuruxatiba - Bahia',
      city: 'Cumuruxatiba',
      description: 'Casa nova e aconchegante no Condomínio Pôr do Sol, no bairro Morro da Fumaça, a apenas 5 minutos da Praça Central de Cumuruxatiba. Acomoda até 6 pessoas em 2 quartos (sendo 1 suíte): o primeiro com cama de casal e solteiro, e o segundo com cama de casal e auxiliar de solteiro.',
      price: 1200000,
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      images: ['assets/images/houses/c-img-1.jpg', 'assets/images/houses/c-img-2.jpg', 'assets/images/houses/c-img-3.jpg'],
      pdfUrl: 'https://drive.google.com/file/d/1K0Tq4UmQ7TjED0-ypMmdvKppP_TI1fBs/view?usp=drive_link',
      amenities: ['Piscina', 'Varanda', 'Garagem']
    },
    {
      id: 4,
      title: 'Casa nova e aconchegante em Cumuruxatiba - Bahia',
      city: 'Cumuruxatiba',
      description: 'Casa nova e aconchegante no Condomínio Pôr do Sol, no bairro Morro da Fumaça, a apenas 5 minutos da Praça Central de Cumuruxatiba. Acomoda até 6 pessoas em 2 quartos (sendo 1 suíte): o primeiro com cama de casal e solteiro, e o segundo com cama de casal e auxiliar de solteiro.',
      price: 1200000,
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      images: ['assets/images/houses/c-img-2.jpg', 'assets/images/houses/c-img-3.jpg', 'assets/images/houses/c-img-1.jpg'],
      pdfUrl: 'https://drive.google.com/file/d/1K0Tq4UmQ7TjED0-ypMmdvKppP_TI1fBs/view?usp=drive_link',
      amenities: ['Piscina', 'Varanda', 'Garagem']
    },
    {
      id: 5,
      title: 'Casa em Arraial D`Ajuda - Brasil',
      city: 'Arraial d Ajuda',
      description: 'Desfrute de momentos inesquecíveis em nossa casa em Arraial Dajuda! Relaxe na piscina enquanto aproveita a brisa do mar, em uma localização privilegiada, a poucos passos da praia. Com quartos climatizados e uma sala de estar confortável, é o lugar perfeito para recarregar as energias.',
      price: 1200000,
      bedrooms: 4,
      bathrooms: 2,
      area: 250,
      images: ['assets/images/houses/g-img-3.JPG', 'assets/images/houses/g-img-2.JPG', 'assets/images/houses/g-img-1.JPG'],
      pdfUrl: 'https://drive.google.com/file/d/1To1TPqiMYbXhUVlBr7lU1EpiuXbjf91X/view?usp=drive_link',
      amenities: ['Piscina', 'Varanda', 'Garagem']
    },
    {
      id: 6,
      title: 'Casa espetacular em Cumuruxatiba - Bahia',
      city: 'Cumuruxatiba',
      description: 'Casa no Condomínio Pôr do Sol, no bairro Morro da Fumaça com 2 quartos, cozinha, banheiro, área externa para uso e garagem. A casa é mobiliada e equipada com eletrodomésticos. Casa ideal para quem busca tranquilidade e contato com a natureza. Faça download do arquivo para mais informações',
      price: 1200000,
      bedrooms: 2,
      bathrooms: 1,
      area: 150,
      images: ['assets/images/houses/d-img-3.jpg', 'assets/images/houses/d-img-2.jpg', 'assets/images/houses/d-img-1.jpg'],
      pdfUrl: 'https://drive.google.com/file/d/1To1TPqiMYbXhUVlBr7lU1EpiuXbjf91X/view?usp=drive_link',
      amenities: ['Piscina', 'Varanda', 'Garagem']
    },


    // Adicione mais casas aqui...
  ];

  getHouses(): House[] {
    return this.houses;
  }

  getHousesByCity(city: string): House[] {
    return this.houses.filter(house => house.city === city);
  }

  getCities(): string[] {
    return [...new Set(this.houses.map(house => house.city))];
  }
}