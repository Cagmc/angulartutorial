import { TankImage } from './tank-image.interface';

export interface TankDetails {
    name: string;
    nation: string;
    tier: number;
    type: string;
    description: string;
    price_credit: number;
    price_gold: number;
    is_premium: boolean;
    tag: string;
    suspensions: Array<number>[];
    engines: Array<number>[];
    guns: Array<number>[];
    turrets: Array<number>[];
    images: TankImage;
}
