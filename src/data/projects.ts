import nuitMmiImg from '../assets/Nuit du code mmi .png';
import interstellarRolexImg from '../assets/interstellarXRolex.png';
import sndPortfolioImg from '../assets/snd portfolio.png';
import rocamtourImg from '../assets/rocamatour portfolio.png';
import rocamtourVideo from '../assets/motion_rocamatour.mp4';
import enuTrocsImg from '../assets/Gemini_Generated_Image_wauuatwauuatwauu.png';
import oneFruitImg from '../assets/Gemini_Generated_Image_v2rn58v2rn58v2rn.png';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  detailedSections: {
    context: string;
    process: string;
    learnings: string;
    skills: string[];
    difficulties: string;
    overcome: string;
    impact: string;
  };
  image: string;
  video?: string;
  tags: string[];
  date: string;
  category: string;
  group: string;
  featured?: boolean;
  link?: string;
  links?: Array<{ label: string; url: string }>;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "stage-snd-digital",
    title: "Stage chez SND Digital",
    description: "Participation à plusieurs missions liées à la communication visuelle et au développement web.",
    fullDescription: "Durant mon stage chez SND Digital, j'ai travaillé sur la refonte du site web de l'entreprise, la création de supports de communication (affiches, présentations, vidéos), l'analyse SEO et la réalisation de maquettes interactives et d'animations. Ce stage m'a permis d'allier design, stratégie digitale et esprit d'entreprise tout en utilisant des outils professionnels tels que Figma, WordPress, Illustrator et After Effects.",
    detailedSections: {
      context: "SND Digital est une agence spécialisée dans la transformation numérique des entreprises basée à Limoges. Mon stage de 10 semaines s'est déroulé au sein du pôle communication, où j'ai été intégré à une équipe de 4 personnes travaillant sur divers projets clients. L'agence accompagne des PME et des collectivités dans leur transition digitale, ce qui m'a permis de toucher à des problématiques très variées.",
      process: "Dès la première semaine, j'ai été plongé dans la refonte complète du site vitrine de l'agence sur WordPress. J'ai commencé par un audit de l'existant, identifié les points faibles en termes d'UX et de SEO, puis proposé une nouvelle arborescence. En parallèle, j'ai conçu les maquettes sur Figma avant de les intégrer. J'ai également réalisé des supports print (affiches A3, flyers) pour un événement client, ainsi qu'une vidéo promotionnelle montée sur After Effects. La dernière phase du stage a été consacrée à l'analyse des performances SEO avec des outils comme Google Analytics et SEMrush.",
      learnings: "Ce stage m'a appris à travailler dans un environnement professionnel exigeant où les deadlines sont courtes et les retours clients fréquents. J'ai considérablement amélioré ma maîtrise de WordPress (thèmes personnalisés, plugins avancés) et découvert les subtilités du SEO technique. J'ai aussi appris à présenter mon travail devant un client et à défendre mes choix créatifs avec des arguments concrets.",
      skills: ["Gestion de projet en agence", "WordPress avancé", "SEO technique", "Présentation client", "Création de supports print", "Montage vidéo professionnel", "Travail en équipe pluridisciplinaire"],
      difficulties: "La principale difficulté a été de jongler entre plusieurs projets simultanément tout en maintenant un niveau de qualité élevé. Le client du site vitrine avait des attentes très précises et changeait régulièrement d'avis, ce qui m'a obligé à revoir mes maquettes plusieurs fois. J'ai aussi rencontré des problèmes techniques avec certains plugins WordPress qui entraient en conflit.",
      overcome: "J'ai appris à mieux structurer mon temps en utilisant un outil de gestion de tâches (Notion) et à communiquer plus fréquemment avec le client pour valider chaque étape avant d'avancer. Pour les conflits de plugins, j'ai développé un réflexe de documentation et de tests systématiques avant chaque mise en production. Mon tuteur m'a aussi appris l'importance de faire des sauvegardes régulières.",
      impact: "Ce stage a été déterminant dans mon parcours. Il m'a confirmé que le design et la communication digitale sont les domaines dans lesquels je veux évoluer. L'expérience en agence m'a donné une vision réaliste du métier et m'a appris à être polyvalent. Les compétences acquises en SEO et en WordPress sont directement transférables et me servent déjà dans mes projets personnels. Sur le plan humain, j'ai gagné en confiance et en autonomie."
    },
    image: sndPortfolioImg,
    tags: ["Figma", "WordPress", "Illustrator", "After Effects"],
    date: "Avril 2025 - Juin 2025",
    category: "Stage",
    group: "Com. visuelle",
    links: [
      {
        label: "Maquette",
        url: "https://www.figma.com/design/YWJ5r0yFHRHGQAP74UTsQZ/snd-DIGITAL?node-id=0-1&t=Kcg358Qujptu1yAF-1"
      },
      {
        label: "Design interactif",
        url: "https://www.figma.com/proto/JZWr8pV0m2THASizjZtWxQ/SND-Digital?page-id=25%3A8&node-id=60-481&viewport=260%2C2831%2C0.07&t=t28RACnoqgn6lOhx-1&scaling=contain&content-scaling=fixed"
      }
    ]
  },
  {
    id: 2,
    slug: "enu-trocs-ecommerce",
    title: "Projet ENU Trocs — Site e-commerce fictif",
    description: "Création d'un site web complet de vente et d'échange autour d'un jeu vidéo.",
    fullDescription: "Projet consistant à développer un site e-commerce inspiré de l'univers de Dofus, avec recherche sur le public cible, création de maquettes sur Figma, développement sur WordPress (HTML, CSS, JavaScript, PHP), mise en place de fonctionnalités dynamiques comme barre de recherche, tri des articles et panier d'achat, et intégration d'objets 3D sur Blender pour renforcer l'immersion.",
    detailedSections: {
      context: "Ce projet universitaire avait pour objectif de concevoir un site e-commerce complet autour d'un univers de jeu vidéo. Nous avons choisi Dofus, un MMORPG français très populaire, pour créer une plateforme fictive d'échange et de vente d'objets virtuels appelée ENU Trocs. Le projet a été réalisé en binôme sur une période de 6 semaines dans le cadre du module de développement web.",
      process: "Nous avons commencé par une étude de marché pour identifier notre cible (joueurs de Dofus entre 16 et 30 ans) et analyser les plateformes concurrentes. Ensuite, nous avons établi un cahier des charges détaillé, suivi de la conception des wireframes puis des maquettes haute fidélité sur Figma. Le développement s'est fait sur WordPress avec des fonctionnalités custom en PHP : barre de recherche dynamique avec auto-complétion, système de tri et filtres par catégorie, et un panier d'achat fonctionnel. Pour enrichir l'expérience, j'ai modélisé des objets du jeu en 3D sur Blender, intégrés ensuite dans les fiches produits.",
      learnings: "Ce projet m'a appris à concevoir un parcours utilisateur complet pour un site e-commerce, de la page d'accueil au tunnel de commande. J'ai approfondi mes compétences en PHP pour créer des fonctionnalités dynamiques et j'ai découvert les bases de la modélisation 3D sur Blender. Travailler en binôme m'a aussi enseigné l'importance de la communication et du versioning (Git).",
      skills: ["Conception UX e-commerce", "Développement PHP/WordPress", "Modélisation 3D (Blender)", "Maquettage Figma", "Gestion de projet en binôme", "Recherche utilisateur"],
      difficulties: "L'intégration des modèles 3D dans les pages WordPress a été un vrai casse-tête technique. Blender était un outil complètement nouveau pour moi, et les fichiers 3D étaient trop lourds pour un affichage web fluide. De plus, faire fonctionner le panier d'achat avec les sessions PHP sur WordPress demandait une compréhension approfondie du CMS.",
      overcome: "Pour les modèles 3D, j'ai appris à optimiser les meshes et à exporter en format glTF, beaucoup plus léger. J'ai également utilisé un viewer 3D JavaScript léger pour les rendre interactifs dans le navigateur. Pour le panier, j'ai étudié la documentation de WooCommerce en profondeur et adapté certaines fonctions à notre besoin spécifique.",
      impact: "Ce projet m'a donné une première vraie expérience de développement e-commerce de A à Z. La compréhension du parcours utilisateur et de l'UX d'achat est une compétence que je réutilise constamment. L'initiation à Blender m'a ouvert la porte à la 3D, un domaine qui m'intéresse de plus en plus. C'est aussi le premier projet où j'ai vraiment compris l'importance du travail itératif et des tests utilisateurs."
    },
    image: enuTrocsImg,
    tags: ["Figma", "WordPress", "Blender"],
    date: "2025",
    category: "Site e-commerce",
    group: "Web design",
    link: "https://www.figma.com/proto/6l7j8moLx8E5OPe05yXZYP/Enu-trocs?page-id=55%3A43&node-id=55-45&p=f&viewport=359%2C171%2C0.04&t=vkj8wb6tGwgw1zJv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=55%3A45",
  },
  {
    id: 3,
    slug: "one-fruit-app-mobile",
    title: "Projet One Fruit — Application mobile",
    description: "Prototype d'une application mobile pour acheter, vendre et échanger des objets entre utilisateurs.",
    fullDescription: "Conception d'une application mobile interactive inspirée de l'univers de One Piece, dans l'esprit de Vinted. Réalisation de wireframes, création d'un style graphique fidèle à l'univers, conception des pages principales (accueil, recherche, profil, commande) et développement d'un prototype fonctionnel sur Figma avec composants et animations pour simuler une navigation réaliste.",
    detailedSections: {
      context: "Dans le cadre d'un projet de design d'interface mobile, nous devions concevoir une application de marketplace inspirée d'un univers fictif. J'ai choisi One Piece, un manga que j'apprécie particulièrement, pour créer 'One Fruit' — une application de vente et d'échange d'objets entre fans, dans l'esprit de Vinted mais avec une identité visuelle forte et immersive.",
      process: "J'ai démarré par une phase de recherche : benchmark des applications de marketplace (Vinted, Leboncoin, Depop), analyse des codes visuels de One Piece, et définition des personas utilisateurs. Ensuite, j'ai créé des user flows pour les parcours principaux (inscription, recherche, achat, vente). Les wireframes basse fidélité ont été validés avant de passer aux maquettes haute fidélité sur Figma, où j'ai développé un design system complet avec des composants réutilisables. Le prototype final comprend plus de 25 écrans interactifs avec des micro-animations.",
      learnings: "Ce projet m'a permis de maîtriser le prototypage avancé sur Figma (composants, variants, auto-layout, interactions complexes). J'ai appris à créer un design system cohérent et à penser 'mobile first'. La phase de recherche utilisateur m'a également appris à justifier chaque choix de design par des données concrètes.",
      skills: ["Prototypage avancé Figma", "Design system mobile", "UX Research", "User flows & wireframing", "Micro-animations", "Direction artistique thématique"],
      difficulties: "Maintenir la cohérence visuelle entre l'univers de One Piece et les conventions UX d'une application de marketplace moderne a été un défi constant. Certaines animations étaient trop complexes pour le prototype Figma et ralentissaient la navigation. J'ai aussi eu du mal à hiérarchiser l'information sur les petits écrans mobiles.",
      overcome: "J'ai créé un moodboard très détaillé et une palette de couleurs stricte pour garantir la cohérence. Pour les animations, j'ai simplifié celles qui posaient problème et opté pour des micro-interactions subtiles mais efficaces. Concernant la hiérarchie, j'ai réalisé des tests utilisateurs avec 5 camarades qui m'ont aidé à identifier les écrans trop chargés.",
      impact: "One Fruit est le projet dont je suis le plus fier en termes de design pur. Il m'a confirmé ma passion pour l'UI/UX mobile et m'a donné un portfolio piece solide. Les compétences en design system et en prototypage sont directement applicables en entreprise. Ce projet m'a aussi appris qu'un bon design, c'est avant tout un design testé et validé par de vrais utilisateurs."
    },
    image: oneFruitImg,
    tags: ["Figma", "UI/UX", "Prototyping"],
    date: "2025",
    category: "Application mobile",
    group: "UI/UX",
    link: "https://www.figma.com/proto/eAdcvzppxCdatewpJIotwY/Poulbriere-Louka---One-Piece?page-id=0%3A1&node-id=6-2&viewport=873%2C-482%2C0.25&t=8hwkFLGBGUultJ24-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=39%3A49",
  },
  {
    id: 4,
    slug: "recettes-etudiants-sportifs",
    title: "Recettes pour étudiants sportifs",
    description: "Création d'un livre de recettes équilibrées pour étudiants sportifs.",
    fullDescription: "Recherche et sélection de recettes simples et économiques, définition d'une ligne éditoriale, mise en page sur InDesign avec charte graphique sportive et moderne, tests utilisateurs pour améliorer lisibilité et compréhension.",
    detailedSections: {
      context: "Ce projet éditorial avait pour objectif de concevoir un livre de recettes destiné aux étudiants sportifs, alliant nutrition équilibrée et budget limité. Le défi était de rendre la cuisine accessible et motivante pour un public jeune et actif, tout en respectant les contraintes d'un projet de mise en page professionnelle sur InDesign.",
      process: "J'ai commencé par une recherche approfondie sur la nutrition sportive et les habitudes alimentaires des étudiants (sondage auprès de 30 camarades). J'ai sélectionné 15 recettes simples, rapides et économiques, puis défini une ligne éditoriale dynamique et colorée. La charte graphique s'inspire des codes du sport avec des couleurs énergiques (orange, vert, bleu). Chaque recette suit un gabarit comprenant : photo, liste d'ingrédients, étapes illustrées, temps de préparation, coût estimé et apports nutritionnels. Le document final fait 48 pages, entièrement mis en page sur InDesign.",
      learnings: "J'ai considérablement amélioré ma maîtrise d'InDesign : gabarits de pages, styles de paragraphes et de caractères, grilles de mise en page, gestion des images et export PDF professionnel. J'ai aussi appris les bases de la direction éditoriale et l'importance de la cohérence visuelle sur un document long.",
      skills: ["Mise en page InDesign", "Direction éditoriale", "Charte graphique", "Recherche utilisateur (sondage)", "Typographie", "Photographie culinaire"],
      difficulties: "Gérer la mise en page de 48 pages tout en maintenant une cohérence visuelle parfaite a été chronophage. Les photos de recettes réalisées par nos soins n'étaient pas toujours de qualité suffisante, et calibrer les informations nutritionnelles demandait des connaissances que je n'avais pas initialement.",
      overcome: "J'ai créé des gabarits de pages réutilisables sur InDesign pour garantir la cohérence et gagner du temps. Pour les photos, j'ai improvisé un mini-studio (lumière naturelle, fond neutre) et retouché les images sur Lightroom. Pour la nutrition, j'ai consulté des sources fiables (Anses, Ciqual) et vérifié chaque information.",
      impact: "Ce projet m'a appris la rigueur nécessaire pour un travail éditorial de qualité. InDesign est devenu un outil que je maîtrise avec confiance, et je suis capable de produire des documents professionnels print de A à Z. Sur le plan personnel, j'ai découvert un intérêt pour la nutrition sportive qui m'accompagne au quotidien."
    },
    image: "/MonPortfolio/assets/5.png",
    tags: ["InDesign", "Graphisme", "UX"],
    date: "2025",
    category: "Édition / Design",
    group: "Com. visuelle",
  },
  {
    id: 5,
    slug: "kermesse-animaux-refonte",
    title: "Kermesse des Animaux — Refonte web",
    description: "Refonte complète du site web d'une kermesse à Limoges dédiée aux animaux.",
    fullDescription: "Projet de groupe comprenant l'audit du site existant, la définition d'une nouvelle arborescence, la création de maquettes sur Figma avec illustrations et style graphique adapté, et un travail collaboratif pour assurer cohérence et accessibilité.",
    detailedSections: {
      context: "La Kermesse des Animaux est un événement caritatif annuel organisé à Limoges au profit des refuges animaliers de la région. Leur site web, vieillissant et peu fonctionnel, ne reflétait pas l'énergie de l'événement. Notre équipe de 4 étudiants a été missionnée pour proposer une refonte complète dans le cadre d'un projet de design collaboratif.",
      process: "Nous avons d'abord réalisé un audit complet du site existant : analyse ergonomique, test d'accessibilité (WCAG), benchmark de sites d'événements similaires. Puis nous avons redéfini l'arborescence en simplifiant la navigation (de 12 pages à 6 pages essentielles). Chaque membre a pris en charge une partie : j'étais responsable de la direction artistique et des illustrations. J'ai créé un univers visuel chaleureux avec des illustrations d'animaux dessinées sur Illustrator, intégrées dans les maquettes Figma. Nous avons utilisé FigJam pour les ateliers de co-conception et Notion pour le suivi de projet.",
      learnings: "Ce projet m'a appris à travailler efficacement en équipe de design : répartition des tâches, revues de design, résolution de conflits créatifs. J'ai aussi approfondi mes compétences en accessibilité web et en illustration vectorielle.",
      skills: ["Travail collaboratif design", "Accessibilité web (WCAG)", "Illustration vectorielle", "Audit ergonomique", "Co-conception (FigJam)", "Direction artistique"],
      difficulties: "Coordonner le travail de 4 personnes sur les mêmes fichiers Figma a parfois créé des conflits. De plus, les attentes du commanditaire (le responsable de la kermesse) étaient parfois floues et changeantes. L'accessibilité a aussi été un défi car nous manquions d'expérience dans ce domaine.",
      overcome: "Nous avons mis en place des conventions de nommage strictes et un système de branches dans Figma. Pour le client, nous avons instauré des points hebdomadaires avec compte-rendus écrits. Pour l'accessibilité, nous avons suivi un cours en ligne gratuit et utilisé des outils d'audit automatisés (axe DevTools, Lighthouse).",
      impact: "Travailler sur un vrai projet avec un vrai commanditaire a été très formateur. J'ai compris l'importance de la communication avec le client et de la documentation projet. Mes compétences en illustration se sont beaucoup améliorées et j'ai développé une sensibilité à l'accessibilité que j'intègre désormais dans tous mes projets."
    },
    image: "/MonPortfolio/assets/4.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    date: "2025",
    category: "Design UI/UX",
    group: "UI/UX",
  },
  {
    id: 6,
    slug: "icone-spatiale-illustration",
    title: "Icône spatiale — Illustration",
    description: "Conception d'une icône sur le thème de l'espace pour une application mobile.",
    fullDescription: "Création d'un moodboard pour définir l'identité visuelle, réalisation finale sur Illustrator en flat design, minimaliste et lisible.",
    detailedSections: {
      context: "Dans le cadre d'un exercice de design graphique, il fallait concevoir une icône d'application mobile sur un thème imposé : l'espace. L'icône devait être reconnaissable à petite taille (1024×1024px réduite à 60×60px), respecter les guidelines iOS/Android, et transmettre immédiatement le thème spatial.",
      process: "J'ai commencé par constituer un moodboard rassemblant des références d'icônes spatiales, des palettes de couleurs nocturnes et des formes géométriques symbolisant l'espace (fusées, planètes, étoiles). Après avoir esquissé une dizaine de concepts au crayon, j'ai sélectionné les 3 plus prometteurs pour les vectoriser sur Illustrator. Le design final adopte un style flat design épuré avec une fusée stylisée décollant d'une planète, sur un fond bleu nuit avec des étoiles subtiles. J'ai testé la lisibilité à différentes tailles et ajusté les couleurs pour garantir un contraste suffisant.",
      learnings: "Cet exercice m'a appris la discipline du design sous contrainte. Créer quelque chose d'impactant dans un format aussi petit demande une réflexion poussée sur la simplification et la hiérarchie visuelle. J'ai aussi amélioré ma maîtrise des outils vectoriels d'Illustrator (pathfinder, alignement, export multi-résolution).",
      skills: ["Illustrator avancé", "Flat design", "Design d'icônes", "Moodboarding", "Lisibilité multi-résolution", "Guidelines iOS/Android"],
      difficulties: "Le plus dur a été de trouver le bon niveau de détail : trop simple, l'icône était générique ; trop détaillée, elle devenait illisible en petit. Choisir entre plusieurs concepts prometteurs a aussi été un exercice de décision difficile.",
      overcome: "J'ai imprimé mes concepts à différentes tailles et demandé l'avis de camarades pour faire un choix objectif. Pour le niveau de détail, j'ai travaillé en zoom arrière sur Illustrator pour toujours voir le rendu réel, et j'ai appliqué la règle du 'si un élément n'est pas visible à 60px, il est supprimé'.",
      impact: "Ce projet apparemment simple m'a énormément appris sur l'essence du design graphique : communiquer un maximum avec un minimum. C'est une compétence que j'applique désormais à tous mes travaux, qu'il s'agisse de logos, d'interfaces ou de présentations. L'icône fait partie de mes réalisations les plus satisfaisantes par sa pureté."
    },
    image: "/MonPortfolio/assets/6.png",
    tags: ["Illustrator", "Flat Design", "Graphisme"],
    date: "2025",
    category: "Illustration",
    group: "Com. visuelle",
  },
  {
    id: 7,
    slug: "scene-3d-aframe",
    title: "Scène 3D interactive — A-Frame",
    description: "Création d'un environnement 3D interactif immersif directement dans le navigateur.",
    fullDescription: "Développement d'une scène 3D interactive avec A-Frame pour explorer le design immersif sur le web. Ajout de lumières et d'objets interactifs, programmation HTML/JS pour gérer l'interaction et l'immersion.",
    detailedSections: {
      context: "Ce projet explorait les possibilités du web immersif à travers A-Frame, un framework open-source pour créer des expériences VR accessibles directement depuis un navigateur. L'objectif était de concevoir une scène 3D interactive complète, navigable à la souris ou en VR avec un casque, démontrant les capacités du WebXR.",
      process: "J'ai d'abord étudié la documentation d'A-Frame et réalisé plusieurs scènes de test pour comprendre le système d'entités-composants. Ma scène finale représente un environnement spatial avec des planètes en orbite, des astéroïdes interactifs et un vaisseau que l'utilisateur peut explorer. J'ai programmé des interactions en JavaScript : cliquer sur un objet affiche des informations, la navigation se fait en première personne, et des sons d'ambiance renforcent l'immersion. J'ai aussi intégré des lumières dynamiques (point lights, spot lights) et des skyboxes personnalisées.",
      learnings: "Ce projet m'a initié au développement 3D web et au paradigme entités-composants. J'ai compris comment fonctionnent les scènes 3D (caméras, lumières, materials, meshes) et comment les rendre interactives avec JavaScript. C'était aussi ma première expérience avec la réalité virtuelle sur navigateur.",
      skills: ["A-Frame / WebXR", "JavaScript 3D", "Design d'environnement", "Interaction utilisateur VR", "Lumières et materials 3D", "HTML sémantique 3D"],
      difficulties: "Les performances étaient un vrai problème : trop d'objets et la scène devenait saccadée, surtout sur mobile. Gérer les interactions en VR (raycasting, contrôleurs) était beaucoup plus complexe que prévu. Le débogage 3D est aussi très différent du web classique.",
      overcome: "J'ai appris à optimiser en utilisant des matériaux simples (flat shading), en réduisant le nombre de polygones et en implémentant du 'level of detail' (LOD). Pour le VR, j'ai utilisé les composants natifs d'A-Frame (cursor, laser-controls) plutôt que de tout coder manuellement. J'ai aussi utilisé l'inspecteur A-Frame intégré pour le débogage visuel.",
      impact: "Ce projet a ouvert ma vision sur le futur du web. La 3D interactive et la VR sur navigateur ont un potentiel immense, et j'ai acquis des bases solides pour explorer ce domaine. C'est un projet qui impressionne dans un portfolio et qui montre ma curiosité pour les technologies émergentes."
    },
    image: "/MonPortfolio/assets/8.png",
    tags: ["A-Frame", "3D", "HTML", "JavaScript"],
    date: "2025",
    category: "Application Web VR",
    group: "3D",
  },
  {
    id: 8,
    slug: "ecommerce-basic-fit",
    title: "Site e-commerce Basic Fit",
    description: "Création d'un site e-commerce attractif et responsive.",
    fullDescription: "Conception de l'arborescence et de la navigation pour une expérience utilisateur fluide, design responsive adapté à tous les supports, optimisation UX pour clarifier les parcours et améliorer la conversion.",
    detailedSections: {
      context: "Ce projet consistait à imaginer et concevoir un site e-commerce pour la marque Basic Fit, permettant la vente de produits dérivés (vêtements de sport, accessoires, compléments alimentaires). L'enjeu était de créer une expérience d'achat en ligne cohérente avec l'image de marque énergique et accessible de Basic Fit.",
      process: "J'ai analysé le site existant de Basic Fit et identifié les opportunités pour une boutique en ligne. J'ai défini une arborescence claire (Accueil, Catalogue par catégorie, Fiche produit, Panier, Checkout) et créé des wireframes pour chaque page. Le développement a été réalisé en HTML/CSS pur avec un focus sur le responsive design : la navigation s'adapte parfaitement du desktop au mobile. J'ai utilisé CSS Grid et Flexbox pour les mises en page, et des media queries pour les breakpoints. Un soin particulier a été apporté aux parcours d'achat avec des CTA clairs et un tunnel de commande simplifié.",
      learnings: "Ce projet a renforcé mes compétences en HTML/CSS avancé, particulièrement en responsive design. J'ai appris à penser 'mobile first' et à concevoir des interfaces qui fonctionnent sur tous les supports. L'optimisation UX du parcours d'achat m'a aussi sensibilisé aux enjeux de conversion e-commerce.",
      skills: ["HTML5/CSS3 avancé", "Responsive design (mobile first)", "CSS Grid & Flexbox", "UX e-commerce", "Architecture de l'information", "Tunnel de conversion"],
      difficulties: "Rendre le site parfaitement responsive sans framework CSS a été un exercice exigeant. Certains composants complexes (le sélecteur de taille, le mini-panier) nécessitaient du JavaScript que je maîtrisais moins à l'époque. Le respect de l'identité visuelle Basic Fit tout en créant quelque chose d'original a aussi été un équilibre délicat.",
      overcome: "J'ai adopté une approche méthodique en commençant par le mobile et en ajoutant progressivement des styles pour les écrans plus grands. Pour le JavaScript, j'ai étudié des tutoriels ciblés et décomposé chaque fonctionnalité en petites étapes. J'ai aussi créé un mini guide de style reprenant les codes de Basic Fit (couleurs, typos, iconographie) pour garantir la cohérence.",
      impact: "Ce projet m'a donné une base solide en intégration web pure, sans dépendance à un framework. C'est une compétence fondamentale qui me sert dans tous mes projets. Comprendre les enjeux UX de l'e-commerce est aussi un atout professionnel majeur, car la plupart des entreprises ont besoin de vendre en ligne."
    },
    image: "/MonPortfolio/assets/7.png",
    tags: ["HTML", "CSS", "Responsive", "UX"],
    date: "2025",
    category: "Site e-commerce",
    group: "Web design",
  },
  {
    id: 9,
    slug: "interstellar-rolex-3d",
    title: "Interstellar X Rolex — Immersion 3D",
    description: "Projet de collaboration fictive entre Interstellar et Rolex pour créer une expérience immersive en 3D.",
    fullDescription: "Création d'un projet conceptuel imaginant une collaboration entre le film Interstellar et la marque de luxe Rolex. Développement d'une expérience immersive en 3D combinant l'univers cinématographique d'Interstellar avec l'élégance horlogère de Rolex. Modélisation 3D, mise en scène et rendu pour créer une atmosphère spatiale unique alliant technologie et luxe.",
    detailedSections: {
      context: "Ce projet personnel est né de ma double passion pour le cinéma de science-fiction et le design de produits de luxe. L'idée : imaginer une collaboration entre le film Interstellar de Christopher Nolan et la maison horlogère Rolex, pour créer une montre en édition limitée présentée dans un univers 3D immersif. Un exercice de direction artistique ambitieux mêlant storytelling et modélisation 3D.",
      process: "J'ai commencé par un travail de recherche approfondi sur l'esthétique du film Interstellar (couleurs, textures, ambiance spatiale) et sur les montres Rolex (détails, matériaux, reflets). Sur Blender, j'ai modélisé une montre Rolex fictive intégrant des éléments d'Interstellar (cadran inspiré du trou noir Gargantua, bracelet avec des motifs de vagues de Miller). La scène 3D place la montre en lévitation dans un espace cosmique avec des effets de lumière volumétrique, des étoiles et une courbure gravitationnelle. Le rendu final utilise Cycles pour un photoréalisme optimal.",
      learnings: "Ce projet m'a fait progresser considérablement en modélisation 3D : hard surface modeling pour la montre, sculpting pour les détails, création de matériaux PBR réalistes. J'ai aussi appris le compositing sur Blender et les techniques d'éclairage studio pour le rendu produit.",
      skills: ["Modélisation Blender (hard surface)", "Matériaux PBR", "Éclairage studio 3D", "Rendu Cycles photoréaliste", "Direction artistique conceptuelle", "Compositing", "Storytelling visuel"],
      difficulties: "Modéliser une montre avec un niveau de détail réaliste est extrêmement exigeant : chaque vis, chaque graduation, chaque reflet doit être parfait. Les temps de rendu étaient aussi très longs (plusieurs heures par image). Créer l'effet de trou noir de manière convaincante nécessitait des connaissances en physique et en shaders avancés.",
      overcome: "Je me suis formé avec des tutoriels spécialisés en hard surface modeling et j'ai décomposé la montre en sous-parties modélisées séparément. Pour réduire les temps de rendu, j'ai optimisé les light paths et utilisé le denoising. Pour le trou noir, j'ai étudié les références visuelles du film et utilisé des shaders procéduraux avec des nœuds de distorsion.",
      impact: "Ce projet représente pour moi un tournant dans ma pratique de la 3D. Il combine créativité, technique et storytelling — trois piliers de mon approche du design. Il démontre ma capacité à porter un projet ambitieux seul, de la conception à la livraison. C'est aussi un excellent sujet de conversation en entretien qui montre ma passion et ma curiosité."
    },
    image: interstellarRolexImg,
    tags: ["Blender", "3D", "Concept Design"],
    date: "2025",
    category: "Projet 3D",
    group: "3D",
  },
  {
    id: 10,
    slug: "nuit-mmi-motion-design",
    title: "Nuit MMI 2026 — Motion Design",
    description: "Création d'une affiche animée et vidéo motion design pour l'événement Nuit MMI 2026.",
    fullDescription: "Réalisation d'un motion design pour promouvoir la Nuit MMI 2026, événement annuel du BUT MMI. Conception de l'identité visuelle avec un univers spatial et nocturne, animation des typographies et éléments graphiques. Production vidéo complète incluant storyboard, animation sur After Effects et montage final.",
    detailedSections: {
      context: "La Nuit MMI est l'événement phare annuel du BUT MMI de Limoges : une soirée de présentation des projets étudiants devant un public de professionnels, de familles et de futurs étudiants. J'ai été sélectionné pour créer le motion design promotionnel de l'édition 2026, avec carte blanche sur la direction artistique.",
      process: "J'ai proposé un univers spatial et nocturne, symbolisant l'exploration créative et l'innovation qui caractérisent le MMI. Le processus a commencé par un storyboard de 20 plans, suivi de la création des assets graphiques sur Illustrator (typographies personnalisées, illustrations de planètes, fusées, étoiles). L'animation a été réalisée sur After Effects avec un travail approfondi sur le rythme (calé sur une musique libre de droits), les transitions (morphing, parallaxe) et les effets (particules, glow, grain cinématique). Le résultat est une vidéo de 30 secondes au format vertical, optimisée pour Instagram et les stories.",
      learnings: "Ce projet m'a permis de maîtriser le workflow complet du motion design : du brief au livrable final. J'ai approfondi mes compétences en animation sur After Effects (expressions, parentage, effets de particules) et appris à synchroniser précisément l'animation avec le son. La gestion du temps a été cruciale car j'avais un deadline strict.",
      skills: ["After Effects (animation avancée)", "Storyboarding", "Motion design", "Illustrator (assets)", "Sound design", "Format vertical / réseaux sociaux", "Gestion de deadline"],
      difficulties: "Animer des typographies de manière dynamique et lisible est plus complexe qu'il n'y paraît. Certaines transitions entre les plans ne fonctionnaient pas comme prévu et j'ai dû revoir le storyboard en cours de route. Le rendu final était aussi très lourd et nécessitait une compression intelligente pour les réseaux sociaux sans perdre en qualité.",
      overcome: "Pour les typographies, j'ai étudié des références de motion design professionnel (Behance, Dribbble) et pratiqué des techniques d'animation de texte mot par mot et lettre par lettre. J'ai utilisé des pre-compositions dans After Effects pour tester chaque transition isolément avant de les assembler. Pour la compression, j'ai utilisé Adobe Media Encoder avec des presets personnalisés.",
      impact: "Voir ma vidéo diffusée lors de l'événement officiel devant plus de 200 personnes a été un moment extrêmement gratifiant. Ce projet m'a confirmé que le motion design est une passions que je veux développer professionnellement. Il démontre ma capacité à porter un projet créatif de A à Z sous pression, et constitue une réalisation concrète et visible dans mon portfolio."
    },
    image: nuitMmiImg,
    tags: ["After Effects", "Motion Design", "Illustrator"],
    date: "2026",
    category: "Motion Design",
    group: "Vidéo",
    featured: true,
    link: "https://youtube.com/shorts/Zh-hu-Ec0Q0?feature=share",
  },
  {
    id: 6,
    slug: "rocamtour-event",
    title: "Rocamtour — Création d'événement et identité visuelle",
    description: "Création d'un événement innovant fictif, maquette de site web, posts réseaux sociaux et vidéo promotionnelle.",
    fullDescription: "Rocamtour est un parcours culturel innovant et immersif à Rocamadour accessible pour tout niveau. Projet complet incluant la conception de l'événement de A à Z, la création d'une identité visuelle cohérente, la maquette du site web sur Figma, la production de contenu pour les réseaux sociaux, et la réalisation d'une vidéo promotionnelle dynamique.",
    detailedSections: {
      context: "Ce projet avait pour objectif de concevoir un événement innovant de A à Z, puis de développer toute l'identité visuelle et les outils de communication associés. Rocamadour, destination touristique emblématique, était le point de départ pour imaginer une expérience culturelle immersive et moderne.",
      process: "J'ai d'abord défini le concept et les modalities de Rocamtour : un parcours culturel interactif mêlant histoire, art contemporain et technologie. Ensuite, j'ai créé une identité visuelle avec palette de couleurs, typographies et iconographie consacées. La maquette du site web sur Figma présente les pages principales : accueil, présentation du parcours, réservations et galerie média. Des illustrations et animations enrichissent l'expérience. La vidéo promotionnelle de 30 secondes a été créée avec motion design pour donner un avant-goût immersif de l'événement. Des visuels pour réseaux sociaux (stories, posts carrés) complètent la stratégie de communication.",
      learnings: "Ce projet m'a enseigné à gérer un projet complet de la conception d'un concept jusqu'à sa communication. J'ai approfondi ma compréhension du branding et de la cohérence visuelle cross-media. La production vidéo m'a permis de mettre en pratique le motion design dans un contexte promotionnel réaliste.",
      skills: ["Stratégie d'événement", "Identité visuelle / Branding", "Prototypage Figma", "Motion design vidéo", "Content creation réseaux sociaux", "Direction artistique", "Copywriting"],
      difficulties: "Créer une expérience événementielle innovante tout en restant viable était un vrai défi. Il fallait réfléchir aux contraintes territ, logistiques et budgétaires. Faire cohérence entre l'identité visuelle for web, réseaux sociaux et vidéo requérait une vision créative forte mais maîtrisée.",
      overcome: "J'ai d'abord étudié d'autres événements culturels innovants et leurs stratégies de communication pour m'inspirer. J'ai créé un guide de style complet pour assurer la cohérence cross-media. Pour la vidéo, j'ai réalisé plusieurs versions avant d'affiner le concept final.",
      impact: "Ce projet m'a montré ma capacité à gérer un projet d'envergure impliquant design, motion design et stratégie. C'est un excellent exemple dans mon portfolio de capacité à marier créativité et cohérence visuelle. Rocamtour représente mon intérêt pour les projets qui intègrent plusieurs disciplines créatives."
    },
    image: rocamtourImg,
    video: rocamtourVideo,
    tags: ["Figma", "Motion Design", "Branding", "Event Design", "Social Media"],
    date: "2025",
    category: "Projet événementiel",
    group: "Com. visuelle",
    featured: true,
    link: "https://www.figma.com/proto/o6LSRo70y0bTUlSRCHW8v6/Direction-artistique-2025?page-id=69%3A8&node-id=178-82&viewport=-2711%2C-188%2C0.04&t=86l0BUinPqM21r3z-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=178%3A82",
  },
];
