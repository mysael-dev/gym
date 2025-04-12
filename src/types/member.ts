interface Measurement {
  date: string;
  weight: number; //peso
  waist: number; //cintura
  abdomen: number; //abdomem
  hip: number; //quadril
  chest: number; //peito
  armRelaxed: number; //braço relaxado
  armFlexed: number; //braço flexionado
  thigh: number; //coxa
  calf: number; //panturrilha
}

export interface Member {
    id: string;
    name: string;
    phone: string;
    startDate: string;
    nextPaymentDate: string;
    measurements: Measurement[];
    workoutPlan: string[];
  }