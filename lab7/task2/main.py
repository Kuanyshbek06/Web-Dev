from models import Animal, Dog, Cat

dog1 = Dog("Buddy", 3, "brown", "Labrador")
dog2 = Dog("Max", 5, "black", "Shepherd")
cat1 = Cat("Luna", 2, "white", 9)

animals = [dog1, dog2, cat1]

for animal in animals:
    print(animal)
    print(animal.info())
    print(animal.speak())
    print()
