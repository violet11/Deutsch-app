import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class StorageService {

  saveData(key: string, item: any) {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }

  getData(key: string) {
    let storageItem = localStorage.getItem(key);
    if (storageItem !== null) {
      return JSON.parse(storageItem);
    }
  }
}