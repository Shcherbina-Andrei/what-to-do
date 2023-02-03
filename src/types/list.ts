import {Tasks} from './task';

export type NewList = {
  title: string;
  tasks: [];
  creatingDate: string;
}

export type List = {
  id: string;
  title: string;
  tasks: Tasks;
  creatingDate: string;
}

export type Lists = List[];
