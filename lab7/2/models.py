class Vehicle:
    def __init__ (self, model, country, size):
        self.model   = model
        self.country = country
        self.size    = size
        
    def fly (self):
        print(self.model + " Flying")

    def gipperSpace (self):
        print("HYPERSPACE, WE GET INTO YOU")

    def landOnPlanet (self, planet):
        print("we landed on " + planet)

    def __str__ (self):
        return f"Model: {self.model} | Country: {self.country} | Size: {self.size}"

class ImperialStarDestroyer (Vehicle):
    def __init__(self, model, country, size, power):
        super().__init__(model, country, size)
        self.power = power

    def gipperSpace (self):
        print("THE EMPERIA GOT HYPERSPACE")

    def destroy (self, something):
        print(f"ISD {self.model} destroyed {something} by {self.power}  gunPower")

class HevyCruiserMon_Kalamary (Vehicle):
    def __init__(self, model, country, size, diplomaticeWeight):
        super().__init__(model, country, size)
        self.diplomaticeWeight = diplomaticeWeight

    def gipperSpace (self):
        print("WE GO TO END THE EMPERIA")

    def diplomacy (self, somewhere):
        print(f"HCMK {self.model} go to the make freedom to {somewhere}")


