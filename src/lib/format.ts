export const UNIT_BN: Record<string, string> = {
    kg: 'কেজি',
    litre: 'লিটার',
    dozen: 'ডজন',
    piece: 'পিস',
};

export const unitBn = (unit: string) => UNIT_BN[unit] ?? unit;
export const bn = (n: number) => n.toLocaleString('bn-BD');