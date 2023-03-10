class Vehicle {
  constructor(licensePlate, manufacture) {
    this.licensePlate = licensePlate;
    this.manufacture = manufacture;
    this.engineActive = false;
  }
 
  /* kode lainnya */
}
 
/* 
kode lainnya dalam pembuatan class Car, 
Motorcycle, dsb. 
*/
 
class VehicleFactory {
  repair(vehicles) {
    vehicles.forEach(vehicle => {
      console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
    });

    
  }
  const johnCar = new Car('H121S', 'Honda', 4);
  const tomMotor = new Motorcycle('GF121J', 'Yamaha', 2);
  const dimasCar = new Car('TA1408K', 'Tesla', 4);
 
/* Membuat instance untuk memanggil fungsi repair */
  const vehicleFactory = new VehicleFactory();
  vehicleFactory.repair([johnCar, tomMotor, dimasCar]);
 
/* Output:
Kendaraan H121S sedang melakukan perawatan
Kendaraan GF121J sedang melakukan perawatan
Kendaraan TA1408K sedang melakukan perawatan
*/
}