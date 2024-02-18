// Types
import { RecipesType } from "../../types/recipeTypes";

export const recipes: RecipesType = [
  {
    id: 1,
    image: "Recette01.webp",
    name: "Limonade de coco",
    servings: 1,
    ingredients: [
      {
        ingredient: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "Jus de citron",
        quantity: 2,
      },
      {
        ingredient: "Crème de coco",
        quantity: 2,
        unit: "cuillère(s) à soupe",
      },
      {
        ingredient: "Sucre",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Glaçons",
      },
    ],
    time: 10,
    description:
      "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
    appliance: "Blender",
    ustensils: ["cuillère(s) à soupe", "verres", "presse citron"],
  },
  {
    id: 2,
    image: "Recette02.webp",
    name: "Poisson Cru à la tahitienne",
    servings: 2,
    ingredients: [
      {
        ingredient: "Thon rouge (ou blanc)",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Concombre(s)",
        quantity: 1,
      },
      {
        ingredient: "Tomate(s)",
        quantity: 2,
      },
      {
        ingredient: "Carotte(s)",
        quantity: 1,
      },
      {
        ingredient: "Citron(s) vert(s)",
        quantity: 5,
      },
      {
        ingredient: "Lait de coco",
        quantity: 100,
        unit: "ml",
      },
    ],
    time: 60,
    description:
      "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain). Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poisson avec le citron cette fois-ci dans un saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveurs, vous pouvez ajouter 1 à 2 cuillère(s) à soupe de crème de coco",
    appliance: "Saladier",
    ustensils: ["presse citron"],
  },
  {
    id: 3,
    image: "Recette03.webp",
    name: "Poulet coco réunionnais",
    servings: 4,
    ingredients: [
      {
        ingredient: "Poulet",
        quantity: 1,
      },
      {
        ingredient: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "Coulis de tomate",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oignon(s)",
        quantity: 1,
      },
      {
        ingredient: "Poivron(s) rouge(s)",
        quantity: 1,
      },
      {
        ingredient: "Huile d'olive",
        quantity: 1,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 80,
    description:
      "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz.",
    appliance: "Cocotte",
    ustensils: ["couteau"],
  },
  {
    id: 4,
    image: "Recette04.webp",
    name: "Salade de riz",
    servings: 4,
    ingredients: [
      {
        ingredient: "Riz blanc",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Thon en miettes",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Tomate(s)",
        quantity: 2,
      },
      {
        ingredient: "Oeuf(s) dur(s)",
        quantity: 2,
      },
      {
        ingredient: "Maïs",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 50,
    description:
      "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au goût de chacun des cornichons, olives etc..",
    appliance: "Cuiseur à riz",
    ustensils: ["saladier", "passoire"],
  },
  {
    id: 5,
    image: "Recette05.webp",
    name: "Tarte au thon",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte feuilletée",
        quantity: 1,
      },
      {
        ingredient: "Thon en miettes",
        quantity: 130,
        unit: "g",
      },
      {
        ingredient: "Tomate(s)",
        quantity: 2,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 2,
        unit: "cuillère(s) à soupe",
      },
      {
        ingredient: "Gruyère râpé",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Moutarde de Dijon",
        quantity: 1,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 45,
    description:
      "Étaler la pâte feuilletée aux dimensions du moule, étaler la moutarde sur la pâte feuilletée, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraîche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes",
    appliance: "Four",
    ustensils: ["moule à tarte", "râpe à fromage", "couteau"],
  },
  {
    id: 6,
    image: "Recette06.webp",
    name: "Tarte aux pommes",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 1,
      },
      {
        ingredient: "Pomme(s)",
        quantity: 3,
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 2,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Sucre en Poudre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet(s)",
      },
    ],
    time: 50,
    description:
      "Commencez par mélanger les oeufs, le sucre et le sucre vanillé dans un saladier. Découpez les pommes en tranches, ajoutez la crème fraîche aux oeufs. Une fois que tout est prêt, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant de positionner les pommes sur la tarte. Finalement, versez la préparation à base d'oeufs et de crème fraîche. Laissez cuire au four pendant 30 minutes.",
    appliance: "Four",
    ustensils: ["moule à tarte", "saladier", "fourchette"],
  },
  {
    id: 7,
    image: "Recette07.webp",
    name: "Tartelettes au chocolat et aux fraises",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte sablée",
        quantity: 1,
      },
      {
        ingredient: "Chocolat au lait",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Crème liquide",
        quantity: 80,
        unit: "cl",
      },
      {
        ingredient: "Beurre",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Fraise(s)",
        quantity: 6,
      },
    ],
    time: 50,
    description:
      "Étaler la pâte dans les moules à tartelette. Faire cuire la pâte 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crème liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pâte sur les tartelettes. Couper les fraises en 2 et les positionner sur...",
    appliance: "Four",
    ustensils: ["moule à tartelettes (6)", "casserole"],
  },
  {
    id: 8,
    image: "Recette08.webp",
    name: "Brownie",
    servings: 10,
    ingredients: [
      {
        ingredient: "Noix",
        quantity: 180,
        unit: "g",
      },
      {
        ingredient: "Chocolat noir",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 120,
        unit: "g",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 2,
      },
      {
        ingredient: "Sucre en Poudre",
        quantity: 110,
        unit: "g",
      },
      {
        ingredient: "farine",
        quantity: 90,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeufs et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise !",
    appliance: "Four",
    ustensils: ["moule à gâteaux", "casserole"],
  },
  {
    id: 9,
    image: "Recette09.webp",
    name: "Salade Méditerannéene fraîche au chèvre",
    servings: 4,
    ingredients: [
      {
        ingredient: "Concombre(s)",
        quantity: 1,
      },
      {
        ingredient: "Olive(s)",
      },
      {
        ingredient: "Fromage de chèvre",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Vinaigre balsamic",
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Basilic",
      },
    ],
    time: 15,
    description:
      "Peler le concombre, le couper 2 et retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre goût.",
    appliance: "Saladier",
    ustensils: ["cuillère en bois", "couteau"],
  },
  {
    id: 10,
    image: "Recette10.webp",
    name: "Tartiflette",
    servings: 4,
    ingredients: [
      {
        ingredient: "Reblochon",
        quantity: 1,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 4.5,
        unit: "kg",
      },
      {
        ingredient: "Jambon fumé",
        quantity: 2,
        unit: "tranche(s)",
      },
      {
        ingredient: "Oignon(s)",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Vin blanc sec",
        quantity: 30,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Commencez par cuire les pommes de terre dans l'eau bouillante. Puis épluchez les et coupez les en rondelles. Émincez les oignons puis les faire dorer dans du beurre. Ajoutez le jambon fumé coupé en morceaux ainsi que les pommes de terres. Salez, poivrez à votre goût (et celui de vos convives). Laissez cuire durant environ 10 minutes, puis ajoutez le vin blanc. Après 5 minutes, mettez le tout dans un plat à gratin. Coupez le reblochon, soit en tranches, soit en 2 dans le sens de l'épaisseur et recouvrez les pommes de terre. Cuisez le tout au four (environ 220°) durant 25 minutes. C'est prêt !",
    appliance: "Four",
    ustensils: ["plat à gratin", "couteau", "économe"],
  },
  {
    id: 11,
    image: "Recette11.webp",
    name: "Salade tomate, mozzarella et pommes",
    servings: 4,
    ingredients: [
      {
        ingredient: "Tomates cerises",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Mozzarella",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Jambon de parme",
        quantity: 4,
        unit: "tranche(s)",
      },
      {
        ingredient: "Pommes",
        quantity: 1,
      },
      {
        ingredient: "Salade verte",
        quantity: 1,
      },
      {
        ingredient: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre goût !",
    appliance: "Saladier",
    ustensils: ["couteau", "cuillère à melon"],
  },
  {
    id: 12,
    image: "Recette12.webp",
    name: "Compote pomme rhubarbe",
    servings: 4,
    ingredients: [
      {
        ingredient: "Rhubarbe",
        quantity: 160,
        unit: "g",
      },
      {
        ingredient: "Pommes",
        quantity: 8,
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 6,
        unit: "sachet(s)",
      },
      {
        ingredient: "Eau",
        quantity: 0.5,
        unit: "tasse(s)",
      },
    ],
    time: 40,
    description:
      "Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
    appliance: "Casserole",
    ustensils: ["couteau", "économe"],
  },
  {
    id: 13,
    image: "Recette13.webp",
    name: "Salade mâchée de patates",
    servings: 2,
    ingredients: [
      {
        ingredient: "Mâche",
        quantity: 60,
        unit: "g",
      },
      {
        ingredient: "Pommes de terre",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Échalote",
        quantity: 2,
      },
      {
        ingredient: "Vinaigre de cidre",
        quantity: 1,
        unit: "cuillère(s) à soupe",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 2,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 40,
    description:
      "Cuire les pommes de terre environ 30 minutes. Découper les échalotes finement. Durant la cuisson des pommes de terre, préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez, poivrez à votre discrétion. Dans un saladier, mettre la mâche.",
    appliance: "Casserole",
    ustensils: ["couteau", "saladier", "cuillère en bois"],
  },
  {
    id: 14,
    image: "Recette14.webp",
    name: "Galette Bretonne Saucisse et Fromage à raclette",
    servings: 2,
    ingredients: [
      {
        ingredient: "Saucisse(s) bretonne(s) ou de Toulouse",
        quantity: 2,
      },
      {
        ingredient: "Farine de blé noir",
        quantity: 130,
        unit: "g",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 1,
      },
      {
        ingredient: "Fromage à raclette",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Oignon(s)",
        quantity: 1,
      },
      {
        ingredient: "Beurre",
        quantity: 75,
        unit: "g",
      },
    ],
    time: 100,
    description:
      "Mélanger la farine et les oeufs, faire fondre 25 g de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidir. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
    appliance: "Four",
    ustensils: ["poêle à frire", "couteau"],
  },
  {
    id: 15,
    image: "Recette15.webp",
    name: "Crêpes Chocolat Banane",
    servings: 10,
    ingredients: [
      {
        ingredient: "Oeuf(s)",
        quantity: 3,
      },
      {
        ingredient: "Farine",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Lait",
        quantity: 600,
        unit: "ml",
      },
      {
        ingredient: "Beurre salé",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Chocolat au lait",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Banane",
        quantity: 4,
      },
    ],
    time: 60,
    description:
      "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
    appliance: "Poêle à crêpe",
    ustensils: ["saladier", "louche", "cuillère en bois"],
  },
  {
    id: 16,
    image: "Recette16.webp",
    name: "Gratin de pâtes à la tomate",
    servings: 2,
    ingredients: [
      {
        ingredient: "Tomate(s)",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Mozzarella",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Pennes",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Basilic",
        quantity: 1,
        unit: "tige(s)",
      },
      {
        ingredient: "Huile d'olives",
        quantity: 2,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 45,
    description:
      "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
    appliance: "Four",
    ustensils: ["plat à gratin", "couteau", "râpe à fromage"],
  },
  {
    id: 17,
    image: "Recette17.webp",
    name: "Smoothie à la fraise",
    servings: 6,
    ingredients: [
      {
        ingredient: "Fraise(s)",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Pastèque",
        quantity: 0.5,
      },
      {
        ingredient: "Jus de citron",
        quantity: 1,
        unit: "cuillère(s) à soupe",
      },
      {
        ingredient: "Glaçons",
        quantity: 8,
      },
      {
        ingredient: "Menthe",
      },
    ],
    time: 15,
    description:
      "Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillère à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques feuilles de menthe pour plus de fraîcheur. Mixez le tout. Servir et déguster.",
    appliance: "Blender",
    ustensils: ["verres", "couteau", "presse citron"],
  },
  {
    id: 18,
    image: "Recette18.webp",
    name: "Smoothie ananas et vanille",
    servings: 5,
    ingredients: [
      {
        ingredient: "Ananas",
        quantity: 1,
      },
      {
        ingredient: "Glace à la vanille",
        quantity: 500,
        unit: "ml",
      },
      {
        ingredient: "Lait",
        quantity: 50,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
    appliance: "Blender",
    ustensils: ["verres", "couteau"],
  },
  {
    id: 19,
    image: "Recette19.webp",
    name: "Shake Banane Kiwi",
    servings: 4,
    ingredients: [
      {
        ingredient: "Kiwi",
        quantity: 4,
      },
      {
        ingredient: "Citron",
        quantity: 1,
      },
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "L",
      },
      {
        ingredient: "Sucre glace",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Banane",
        quantity: 1,
      },
    ],
    time: 0,
    description:
      "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
    appliance: "Blender",
    ustensils: ["couteau", "verres", "presse citron"],
  },
  {
    id: 20,
    image: "Recette20.webp",
    name: "Pates Carbonara",
    servings: 5,
    ingredients: [
      {
        ingredient: "Tagliatelles",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Lardons",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Parmesan",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "huile d'olive",
        quantity: 1,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 30,
    description:
      "Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crème fraîche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
    appliance: "Sauteuse",
    ustensils: ["râpe à fromage", "cuillère en bois"],
  },
  {
    id: 21,
    image: "Recette21.webp",
    name: "Spaghettis à la bolognaise",
    servings: 4,
    ingredients: [
      {
        ingredient: "Spaghettis",
        quantity: 400,
        unit: "g",
      },
      {
        ingredient: "Oignon(s)",
        quantity: 2,
      },
      {
        ingredient: "Coulis de tomate",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Viande hachée 1% de matière grasse",
        quantity: 400,
        unit: "g",
      },
      {
        ingredient: "Vin rouge",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 1,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 30,
    description:
      "Cuisiner la viande hachée dans une poêle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oignons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraîche à la viande hachée. Servir.",
    appliance: "Casserole",
    ustensils: ["cuillère en bois", "louche", "couteau"],
  },
  {
    id: 22,
    image: "Recette22.webp",
    name: "Fondant au chocolat",
    servings: 4,
    ingredients: [
      {
        ingredient: "Beurre",
        quantity: 160,
        unit: "g",
      },
      {
        ingredient: "Chocolat noir",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Farine",
        quantity: 50,
        unit: "g",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 4,
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "g",
      },
    ],
    time: 30,
    description:
      "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gâteaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crème dessert.",
    appliance: "Four",
    ustensils: ["moule à gâteaux", "fouet", "casserole"],
  },
  {
    id: 23,
    image: "Recette23.webp",
    name: "Quiche lorraine",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Lardons",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 3,
      },
      {
        ingredient: "Crème Fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Lait",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Étaler la pâte dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre goût. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
    appliance: "Four",
    ustensils: ["moule à gâteaux", "rouleau à pâtisserie", "fouet"],
  },
  {
    id: 24,
    image: "Recette24.webp",
    name: "Salade de pâtes",
    servings: 4,
    ingredients: [
      {
        ingredient: "Thon en miettes",
        quantity: 160,
        unit: "g",
      },
      {
        ingredient: "Maïs",
        quantity: 60,
        unit: "g",
      },
      {
        ingredient: "Tomate(s)",
        quantity: 1,
      },
      {
        ingredient: "Concombre(s)",
        quantity: 0.5,
      },
      {
        ingredient: "Macaronis",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Mayonnaise",
        quantity: 2,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 40,
    description:
      "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
    appliance: "Saladier",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 25,
    image: "Recette25.webp",
    name: "Cookies",
    servings: 4,
    ingredients: [
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Farine",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Chocolat noir en pépites",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 1,
      },
    ],
    time: 30,
    description:
      "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumeaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
    appliance: "Four",
    ustensils: ["fouet", "saladier", "plaque de cuisson"],
  },
  {
    id: 26,
    image: "Recette26.webp",
    name: "Soupe de tomates",
    servings: 2,
    ingredients: [
      {
        ingredient: "Tomate(s)",
        quantity: 6,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 1,
      },
      {
        ingredient: "Huile d'olives",
      },
      {
        ingredient: "Oignon(s)",
        quantity: 1,
      },
      {
        ingredient: "Ail",
        quantity: 1,
        unit: "gousse(s)",
      },
    ],
    time: 25,
    description:
      "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
    appliance: "Mixer",
    ustensils: ["cocotte minute", "couteau"],
  },
  {
    id: 27,
    image: "Recette27.webp",
    name: "Soupe à l'oseille",
    servings: 4,
    ingredients: [
      {
        ingredient: "Oseille",
        quantity: 2,
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 1,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 4,
        unit: "cuillère(s) à soupe",
      },
      {
        ingredient: "Vermicelles",
        quantity: 1,
        unit: "verre(s)",
      },
      {
        ingredient: "Beurre salé",
        quantity: 50,
        unit: "g",
      },
    ],
    time: 15,
    description:
      "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une fois prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème fraîche",
    appliance: "Casserole",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 28,
    image: "Recette28.webp",
    name: "Soupe de poireaux",
    servings: 4,
    ingredients: [
      {
        ingredient: "Poireau",
        quantity: 3,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 400,
        unit: "g",
      },
      {
        ingredient: "Oseille",
        quantity: 75,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 10,
        unit: "cl",
      },
    ],
    time: 80,
    description:
      "Émincer les blanc de poireaux et les faire chauffer dans 25 g de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
    appliance: "Mixer",
    ustensils: ["casserole", "couteau"],
  },
  {
    id: 29,
    image: "Recette29.webp",
    name: "Houmous Express",
    servings: 2,
    ingredients: [
      {
        ingredient: "Pois chiches",
        quantity: 1,
        unit: "boîte(s)",
      },
      {
        ingredient: "Ail",
        quantity: 1,
        unit: "gousse(s)",
      },
      {
        ingredient: "Citron",
        quantity: 2,
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Paprika",
      },
    ],
    time: 30,
    description:
      "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le goût.",
    appliance: "Mixer",
    ustensils: ["cuillère en bois", "presse citron"],
  },
  {
    id: 30,
    image: "Recette30.webp",
    name: "Purée de pois cassés",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pois Cassé",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Oignon(s)",
        quantity: 1,
      },
      {
        ingredient: "Ail",
        quantity: 2,
        unit: "gousse(s)",
      },
    ],
    time: 60,
    description:
      "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuire à petit feu pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
    appliance: "Mixer",
    ustensils: ["casserole", "cuillère en bois"],
  },
  {
    id: 31,
    image: "Recette31.webp",
    name: "Jardinière de légumes",
    servings: 4,
    ingredients: [
      {
        ingredient: "Carotte(s)",
        quantity: 2,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 2,
      },
      {
        ingredient: "Haricots verts",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Petits poids",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Lardons",
        quantity: 150,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petits pois et les haricots verts (tous deux pré-cuits). Ajouter sel, poivre, thym et laurier",
    appliance: "Poêle",
    ustensils: ["couteau", "économe"],
  },
  {
    id: 32,
    image: "Recette32.webp",
    name: "Croque Monsieur à la dinde",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain de mie",
        quantity: 8,
        unit: "tranche(s)",
      },
      {
        ingredient: "Blanc(s) de dinde",
        quantity: 4,
        unit: "tranche(s)",
      },
      {
        ingredient: "Emmental",
        quantity: 8,
        unit: "tranche(s)",
      },
      {
        ingredient: "Gruyère",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Lait",
        quantity: 5,
        unit: "cl",
      },
      {
        ingredient: "Noix de muscade",
        quantity: 1,
        unit: "pincée(s)",
      },
    ],
    time: 20,
    description:
      "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d’emmental, 1 de blanc de dinde et 1 autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croques-monsieurs. Placer au four durant 10 minutes.",
    appliance: "Four",
    ustensils: ["râpe à fromage", "cuillère(s) à soupe", "couteau"],
  },
  {
    id: 33,
    image: "Recette33.webp",
    name: "Sandwich au saumon fumé",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain de mie",
        quantity: 8,
        unit: "tranche(s)",
      },
      {
        ingredient: "Saumon Fumé",
        quantity: 4,
        unit: "tranche(s)",
      },
      {
        ingredient: "Feuilles de laitue",
        quantity: 4,
      },
      {
        ingredient: "Fromage blanc",
        quantity: 4,
        unit: "cuillère(s) à soupe",
      },
      {
        ingredient: "Jus de citron",
        quantity: 1,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 5,
    description:
      "Mélangez le fromage blanc avec le citron. Ajoutez un peu de sel et poivre à votre goût. Faîtes dorer le pain de mie. Puis, étalez le mélange. Ajoutez une feuille de salade, puis le saumon fumé. C'est prêt !",
    appliance: "Four",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 34,
    image: "Recette34.webp",
    name: "Purée de patate douce",
    servings: 4,
    ingredients: [
      {
        ingredient: "Patate(s) douce(s)",
        quantity: 800,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Orange(s)",
        quantity: 1,
      },
    ],
    time: 25,
    description:
      "Épluchez les patates douces et coupez-les en morceaux. Les faire cuire durant 20 minute dans une casserole d'eau bouillante. Passez au mixer en ajoutant la crème et l'huile d'olive à son goût. Salez, poivrez. Pressez l'orange et ajoutez le jus à l'ensemble. Servir.",
    appliance: "Mixer",
    ustensils: ["couteau", "économe", "cuillère en bois"],
  },
  {
    id: 35,
    image: "Recette35.webp",
    name: "Purée de carottes",
    servings: 2,
    ingredients: [
      {
        ingredient: "Carotte(s)",
        quantity: 6,
      },
      {
        ingredient: "Pommes de terre",
        quantity: 1,
      },
      {
        ingredient: "Beurre",
        quantity: 20,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 2,
        unit: "cuillère(s) à soupe",
      },
      {
        ingredient: "Cumin",
        quantity: 1,
        unit: "cuillère(s) à café",
      },
      {
        ingredient: "Noix de muscade",
        quantity: 1,
        unit: "pincée(s)",
      },
    ],
    time: 25,
    description:
      "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumin et la noix de muscade.",
    appliance: "Mixer",
    ustensils: ["cocotte minute", "couteau", "cuillère en bois"],
  },
  {
    id: 36,
    image: "Recette36.webp",
    name: "Lasagne Courgettes et Chèvre",
    servings: 2,
    ingredients: [
      {
        ingredient: "Courgette(s)",
        quantity: 2,
      },
      {
        ingredient: "Fromage de chèvre",
        quantity: 4,
      },
      {
        ingredient: "Lait",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Lasagnes",
        quantity: 5,
        unit: "feuille(s)",
      },
      {
        ingredient: "Gruyère",
        quantity: 40,
        unit: "g",
      },
      {
        ingredient: "Maïzena",
        quantity: 1,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 35,
    description:
      "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamel avec le lait et la maïzena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruyère. Passer au four à 180° durant 20 à 25 minutes.",
    appliance: "Four",
    ustensils: ["plat à gratin", "râpe à fromage", "fouet"],
  },
  {
    id: 37,
    image: "Recette37.webp",
    name: "Courgettes farcies au boeuf",
    servings: 2,
    ingredients: [
      {
        ingredient: "Courgette(s)",
        quantity: 2,
      },
      {
        ingredient: "Viande hachée",
        quantity: 600,
        unit: "g",
      },
      {
        ingredient: "Huile d'olives",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oignon(s)",
        quantity: 1,
      },
      {
        ingredient: "Coulis de tomates",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Gruyère",
        quantity: 50,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Couper les courgettes dans le sens de la longueur. Vider les courgettes dans un saladier. Réserver. Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon, puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson, ajouter le fromage râpé.",
    appliance: "Four",
    ustensils: ["couteau", "cuillère en bois", "poêle à frire"],
  },
  {
    id: 38,
    image: "Recette38.webp",
    name: "Pain Perdu",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain",
        quantity: 6,
        unit: "tranche(s)",
      },
      {
        ingredient: "Lait",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 3,
      },
      {
        ingredient: "Sucre roux",
        quantity: 75,
        unit: "g",
      },
    ],
    time: 20,
    description:
      "Fouettez les oeufs, le sucre et le lait. Tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir.",
    appliance: "Four",
    ustensils: ["fouet", "bol", "cuillère(s) à soupe"],
  },
  {
    id: 39,
    image: "Recette39.webp",
    name: "Crumble aux pommes",
    servings: 40,
    ingredients: [
      {
        ingredient: "Pomme(s)",
        quantity: 2,
      },
      {
        ingredient: "Farine",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "g",
      },
      {
        ingredient: "Sucre roux",
        quantity: 80,
        unit: "g",
      },
    ],
    time: 40,
    description:
      "Découper les pommes en dés. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par-dessus, placer la pâte que vous avez obtenu. Cuire 20 minutes au four.",
    appliance: "Four",
    ustensils: ["saladier", "couteau", "fouet"],
  },
  {
    id: 40,
    image: "Recette40.webp",
    name: "Limonade",
    servings: 4,
    ingredients: [
      {
        ingredient: "Eau",
        quantity: 1,
        unit: "L",
      },
      {
        ingredient: "Citron(s) vert(s)",
        quantity: 3,
      },
      {
        ingredient: "Sucre en poudre",
        quantity: 4,
        unit: "cuillère(s) à café",
      },
      {
        ingredient: "Bicarbonate",
        quantity: 1,
        unit: "cuillère(s) à café",
      },
    ],
    time: 10,
    description:
      "Dans un saladier, mettre l'eau, le jus des citrons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçons et une feuille de menthe pour la décoration.",
    appliance: "Saladier",
    ustensils: ["cuillère en bois", "saladier"],
  },
  {
    id: 41,
    image: "Recette41.webp",
    name: "Mousse au chocolat",
    servings: 4,
    ingredients: [
      {
        ingredient: "Oeuf(s)",
        quantity: 3,
      },
      {
        ingredient: "Chocolat noir",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet(s)",
      },
    ],
    time: 20,
    description:
      "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélanger délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais.",
    appliance: "Casserole",
    ustensils: ["fouet", "spatule", "verres"],
  },
  {
    id: 42,
    image: "Recette42.webp",
    name: "Charlotte aux poires",
    servings: 3,
    ingredients: [
      {
        ingredient: "Chocolat",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 3,
      },
      {
        ingredient: "Poires au jus",
        quantity: 0.5,
        unit: "boîte(s)",
      },
      {
        ingredient: "Boudoirs",
        quantity: 15,
      },
    ],
    time: 60,
    description:
      "Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et est reposée. Alors mouillez les boudoirs dans le jus des poires. Disposez. Alternez : mousse au chocolat, boudoirs et poires. Mettez au frais.",
    appliance: "Moule à charlotte",
    ustensils: ["saladier", "couteau", "fouet"],
  },
  {
    id: 43,
    image: "Recette43.webp",
    name: "Tarte au citron",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Beurre fondu",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 3,
      },
      {
        ingredient: "Citron",
      },
    ],
    time: 50,
    description:
      "Préchauffez le four à 200°. Étaler la pâte. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pâte. Au four 30 minutes. Bon appétit !",
    appliance: "Four",
    ustensils: ["rouleau à pâtisserie", "moule à tarte", "presse citron"],
  },
  {
    id: 44,
    image: "Recette44.webp",
    name: "Crème dessert au chocolat",
    servings: 6,
    ingredients: [
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "L",
      },
      {
        ingredient: "Chocolat",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "g",
      },
      {
        ingredient: "farine",
        quantity: 40,
        unit: "g",
      },
    ],
    time: 15,
    description:
      "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres.",
    appliance: "Casserole",
    ustensils: ["cuillère en bois"],
  },
  {
    id: 45,
    image: "Recette45.webp",
    name: "Crème pâtissière",
    servings: 8,
    ingredients: [
      {
        ingredient: "Lait",
        quantity: 50,
        unit: "cl",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 2,
      },
      {
        ingredient: "Farine",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 80,
        unit: "g",
      },
    ],
    time: 30,
    description:
      "Faire bouillir le lait (on peut y ajouter de l'essence de vanille). Battre les oeufs et le sucre, ajouter la farine, puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
    appliance: "Casserole",
    ustensils: ["fouet", "saladier"],
  },
  {
    id: 46,
    image: "Recette46.webp",
    name: "Far breton",
    servings: 6,
    ingredients: [
      {
        ingredient: "Farine",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet(s)",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 4,
      },
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "L",
      },
      {
        ingredient: "Pruneaux",
        quantity: 100,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit verre de rhum. Verser la pâte dans un plat beurré, y placer les pruneaux et faire cuire à 200° pendant 45 minutes",
    appliance: "Four",
    ustensils: ["fouet", "moule", "verres"],
  },
  {
    id: 47,
    image: "Recette47.webp",
    name: "Mousse au citron",
    servings: 6,
    ingredients: [
      {
        ingredient: "Jus de citron",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Mascarpone",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Crème Fraîche",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 5,
    description:
      "Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraîche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir",
    appliance: "Saladier",
    ustensils: ["fouet", "verres", "cuillère en bois"],
  },
  {
    id: 48,
    image: "Recette48.webp",
    name: "Pizza",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte à pizza",
        quantity: 1,
      },
      {
        ingredient: "Tomates pelées",
        quantity: 1,
        unit: "boîte(s)",
      },
      {
        ingredient: "Lardons",
        quantity: 1,
        unit: "barquette(s)",
      },
      {
        ingredient: "Champignons de paris",
        quantity: 1,
        unit: "boîte(s)",
      },
      {
        ingredient: "Gruyère",
        quantity: 200,
        unit: "g",
      },
    ],
    time: 40,
    description:
      "Étaler la pâte a pizza. Écraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes",
    appliance: "Four",
    ustensils: ["rouleau à pâtisserie", "râpe à fromage", "couteau"],
  },
  {
    id: 49,
    image: "Recette49.webp",
    name: "Smoothie tropical",
    servings: 4,
    ingredients: [
      {
        ingredient: "Bananes",
        quantity: 2,
      },
      {
        ingredient: "Kiwis",
        quantity: 3,
      },
      {
        ingredient: "Mangue",
        quantity: 1,
      },
      {
        ingredient: "Ananas",
        quantity: 4,
        unit: "tranche(s)",
      },
      {
        ingredient: "Miel",
        quantity: 2,
        unit: "cuillère(s) à soupe",
      },
    ],
    time: 0,
    description:
      "Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
    appliance: "Blender",
    ustensils: ["couteau", "verres"],
  },
  {
    id: 50,
    image: "Recette50.webp",
    name: "Frangipane",
    servings: 2,
    ingredients: [
      {
        ingredient: "Pâte feuilletée",
        quantity: 400,
        unit: "g",
      },
      {
        ingredient: "Oeuf(s)",
        quantity: 6,
      },
      {
        ingredient: "Poudre d'amandes",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Sucre glace",
        quantity: 500,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Préparer la frangipane : Mélanger le sucre, la poudre d'amandes, le beurre et les oeufs. Étaler la moitié de la pâte feuilletée et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pâte feuilletée. Mettre au four 30 minutes",
    appliance: "Four",
    ustensils: ["rouleau à pâtisserie", "fouet"],
  },
];

export default recipes;
