from models import Vehicle, ImperialStarDestroyer, HevyCruiserMon_Kalamary

def main():
    v1 = Vehicle("Falcon", "Corellia", "Medium")
    isd = ImperialStarDestroyer("Executor", "Empire", "Huge", 1000)
    cruiser = HevyCruiserMon_Kalamary("Liberty", "Rebels", "Large", 500)

    fleet = [v1, isd, cruiser]

    for ship in fleet:
        print(ship)              
        ship.fly()               
        ship.gipperSpace()       
        ship.landOnPlanet("Tatooine")
        print("------")

    isd.destroy("Rebel Base")
    cruiser.diplomacy("Alderaan")


if __name__ == "__main__":
    main()
