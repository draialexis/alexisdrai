import {Component, OnInit} from '@angular/core';

// function arrondi(x: number) {
//   let result;
//   const temp = Math.floor(x);
//   const dec = x % temp;
//
//   if (dec < 0.5) {
//     result = temp;
//   } else {
//     result = temp + 1;
//   }
//
//   return result;
// }
//
// function suivant(popInit: number) {
//   const isPopHundoK = (popInit >= 100000);
//   let popNext = popInit;
//
//   if (isPopHundoK) {
//     popNext += 24 * popInit / 100;
//   } else {
//     popNext += 78.4 * popInit / 100;
//   }
//
//   return arrondi(popNext);
// }
//
// // function previsionV1(yearNumber: number, popInit: number) {
// //   let popFuture = popInit;
// //
// //   for (let i = 1; i <= yearNumber; i++) {
// //     popFuture = suivant(popFuture);
// //   }
// //
// //   return popFuture;
// // }
//
// function previsionV2(yearNumber: number, popInit: number, affiche: boolean, anneeInit: number) {
//   let popFuture = popInit;
//   let yearFuture = anneeInit;
//
//   for (let i = 1; i <= yearNumber; i++) {
//     if (affiche) {
//       console.log(yearFuture + ' : ' + popFuture);
//     }
//     yearFuture += 1;
//     popFuture = suivant(popFuture);
//   }
//
//   if (affiche) {
//     console.log(yearFuture + ' : ' + popFuture);
//   }
//
//   return popFuture;
// }
//
// function atteindra(threshold: number, nbInit, yearInit) {
//   let nbFuture = nbInit;
//   let yearFuture = yearInit;
//
//   while (nbFuture < threshold) {
//     yearFuture += 1;
//     nbFuture = suivant(nbFuture);
//   }
//
//   return yearFuture;
// }
//
// function showDecreasingV1(n: number) {
//
//   if (n < -5) {
//     for (let i = n; i <= -5; i++) {
//       console.log(i);
//     }
//   } else {
//     for (let i = n; i >= -5; i--) {
//       console.log(i);
//     }
//   }
// }
//
// function showDecreasingV2(n: number) {
//   let count = n;
//   if (n < -5) {
//     while (count <= -5) {
//       console.log(count);
//       count++;
//     }
//   } else {
//     while (count >= -5) {
//       console.log(count);
//       count--;
//     }
//   }
// }


@Component({
  selector: 'app-smokefree',
  templateUrl: './smokefree.component.html',
  styleUrls: ['./smokefree.component.css']
})
export class SmokefreeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
