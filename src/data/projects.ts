import nuitMmiImg from '../assets/Nuit du code mmi .png';
import interstellarRolexImg from '../assets/interstellarXRolex.png';
import interstellarRolexHeroImg from '../assets/rolex interstellar.png';
import sndPortfolioImg from '../assets/snd portfolio.png';
import rocamtourImg from '../assets/rocamatour portfolio.png';
import rocamtourVideo from '../assets/motion_rocamatour.mp4';
import enuTrocsImg from '../assets/Gemini_Generated_Image_wauuatwauuatwauu.png';
import oneFruitImg from '../assets/Gemini_Generated_Image_v2rn58v2rn58v2rn.png';
import livreRecetteImg from '../assets/image portfolio livre.webp';
import couvertureImg from '../assets/couverture.webp';
import pageRecetteImg from '../assets/page-recette.webp';
import oliveOilImg from '../assets/image.png';
import rubilaxImg from '../assets/rubilax video.png';
import digitalCleanupImg from '../assets/digital.png';
import intelligenceCollectiveImg from '../assets/intellignece collective.png';
import basicFitImg from '../assets/basic fit.png';
import barImg from '../assets/bar.png';

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
  illustrations?: string[];
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
    fullDescription: "Durant mon stage chez **SND Digital**, j'ai travaillé sur la **refonte du site web** de l'entreprise, la création de supports de communication (affiches, présentations, vidéos), l'**analyse SEO** et la réalisation de **maquettes interactives** et d'animations. Ce stage m'a permis d'allier design, **stratégie digitale** et esprit d'entreprise tout en utilisant des outils professionnels tels que Figma, WordPress, Illustrator et After Effects.",
    detailedSections: {
      context: "SND Digital est une agence spécialisée dans la **transformation numérique** des entreprises basée à Limoges. Mon stage de **10 semaines** s'est déroulé au sein du **pôle communication**, où j'ai été intégré à une équipe de 4 personnes travaillant sur divers projets clients. L'agence accompagne des PME et des collectivités dans leur **transition digitale**, ce qui m'a permis de toucher à des problématiques très variées.",
      process: "Dès la première semaine, j'ai été plongé dans la **refonte complète du site vitrine** de l'agence sur WordPress. J'ai commencé par un **audit de l'existant**, identifié les points faibles en termes d'UX et de SEO, puis proposé une **nouvelle arborescence**. En parallèle, j'ai conçu les maquettes sur Figma avant de les intégrer. J'ai également réalisé des **supports print** (affiches A3, flyers) pour un événement client, ainsi qu'une **vidéo promotionnelle** montée sur After Effects. La dernière phase du stage a été consacrée à l'analyse des **performances SEO** avec des outils comme Google Analytics et SEMrush.",
      learnings: "Ce stage m'a appris à travailler dans un **environnement professionnel exigeant** où les deadlines sont courtes et les retours clients fréquents. J'ai considérablement amélioré ma maîtrise de **WordPress** (thèmes personnalisés, plugins avancés) et découvert les subtilités du **SEO technique**. J'ai aussi appris à **présenter mon travail** devant un client et à défendre mes choix créatifs avec des arguments concrets.",
      skills: ["Gestion de projet en agence", "WordPress avancé", "SEO technique", "Présentation client", "Création de supports print", "Montage vidéo professionnel", "Travail en équipe pluridisciplinaire"],
      difficulties: "La principale difficulté a été de **jongler entre plusieurs projets** simultanément tout en maintenant un niveau de qualité élevé. Le client du site vitrine avait des **attentes très précises** et changeait régulièrement d'avis, ce qui m'a obligé à revoir mes maquettes plusieurs fois. J'ai aussi rencontré des **problèmes techniques** avec certains plugins WordPress qui entraient en conflit.",
      overcome: "J'ai appris à mieux **structurer mon temps** en utilisant un outil de gestion de tâches (Notion) et à **communiquer plus fréquemment** avec le client pour valider chaque étape avant d'avancer. Pour les conflits de plugins, j'ai développé un réflexe de **documentation et de tests systématiques** avant chaque mise en production. Mon tuteur m'a aussi appris l'importance de faire des **sauvegardes régulières**.",
      impact: "Ce stage a été **déterminant dans mon parcours**. Il m'a confirmé que le design et la **communication digitale** sont les domaines dans lesquels je veux évoluer. L'expérience en agence m'a donné une **vision réaliste du métier** et m'a appris à être polyvalent. Les compétences acquises en SEO et en WordPress sont directement transférables et me servent déjà dans mes projets personnels. Sur le plan humain, j'ai gagné en **confiance et en autonomie**."
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
    fullDescription: "Projet consistant à développer un **site e-commerce** inspiré de l'univers de **Dofus**, avec recherche sur le public cible, création de maquettes sur Figma, développement sur WordPress (HTML, CSS, JavaScript, PHP), mise en place de **fonctionnalités dynamiques** comme barre de recherche, tri des articles et panier d'achat, et intégration d'**objets 3D** sur Blender pour renforcer l'immersion.",
    detailedSections: {
      context: "Ce projet universitaire avait pour objectif de concevoir un **site e-commerce complet** autour d'un univers de jeu vidéo. Nous avons choisi **Dofus**, un MMORPG français très populaire, pour créer une plateforme fictive d'échange et de vente d'objets virtuels appelée **ENU Trocs**. Le projet a été réalisé en binôme sur une période de 6 semaines dans le cadre du module de développement web.",
      process: "Nous avons commencé par une **étude de marché** pour identifier notre cible (joueurs de Dofus entre 16 et 30 ans) et analyser les plateformes concurrentes. Ensuite, nous avons établi un **cahier des charges détaillé**, suivi de la conception des wireframes puis des **maquettes haute fidélité** sur Figma. Le développement s'est fait sur WordPress avec des **fonctionnalités custom en PHP** : barre de recherche dynamique avec auto-complétion, système de tri et filtres par catégorie, et un **panier d'achat fonctionnel**. Pour enrichir l'expérience, j'ai modélisé des objets du jeu en **3D sur Blender**, intégrés ensuite dans les fiches produits.",
      learnings: "Ce projet m'a appris à concevoir un **parcours utilisateur complet** pour un site e-commerce, de la page d'accueil au tunnel de commande. J'ai approfondi mes compétences en **PHP** pour créer des fonctionnalités dynamiques et j'ai découvert les bases de la **modélisation 3D** sur Blender. Travailler en binôme m'a aussi enseigné l'importance de la **communication et du versioning** (Git).",
      skills: ["Conception UX e-commerce", "Développement PHP/WordPress", "Modélisation 3D (Blender)", "Maquettage Figma", "Gestion de projet en binôme", "Recherche utilisateur"],
      difficulties: "L'intégration des **modèles 3D** dans les pages WordPress a été un vrai casse-tête technique. **Blender** était un outil complètement nouveau pour moi, et les fichiers 3D étaient trop lourds pour un affichage web fluide. De plus, faire fonctionner le **panier d'achat** avec les sessions PHP sur WordPress demandait une compréhension approfondie du CMS.",
      overcome: "Pour les modèles 3D, j'ai appris à **optimiser les meshes** et à exporter en format **glTF**, beaucoup plus léger. J'ai également utilisé un viewer 3D JavaScript léger pour les rendre interactifs dans le navigateur. Pour le panier, j'ai étudié la documentation de **WooCommerce** en profondeur et adapté certaines fonctions à notre besoin spécifique.",
      impact: "Ce projet m'a donné une première **vraie expérience de développement e-commerce** de A à Z. La compréhension du **parcours utilisateur** et de l'UX d'achat est une compétence que je réutilise constamment. L'initiation à Blender m'a ouvert la porte à la **3D**, un domaine qui m'intéresse de plus en plus. C'est aussi le premier projet où j'ai vraiment compris l'importance du **travail itératif** et des tests utilisateurs."
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
    fullDescription: "Conception d'une **application mobile interactive** inspirée de l'univers de **One Piece**, dans l'esprit de Vinted. Réalisation de wireframes, création d'un **style graphique** fidèle à l'univers, conception des pages principales (accueil, recherche, profil, commande) et développement d'un **prototype fonctionnel** sur Figma avec composants et animations pour simuler une navigation réaliste.",
    detailedSections: {
      context: "Dans le cadre d'un projet de **design d'interface mobile**, nous devions concevoir une application de marketplace inspirée d'un univers fictif. J'ai choisi **One Piece**, un manga que j'apprécie particulièrement, pour créer 'One Fruit' — une application de vente et d'échange d'objets entre fans, dans l'esprit de Vinted mais avec une **identité visuelle forte** et immersive.",
      process: "J'ai démarré par une phase de **recherche** : benchmark des applications de marketplace (Vinted, Leboncoin, Depop), analyse des codes visuels de One Piece, et définition des **personas utilisateurs**. Ensuite, j'ai créé des **user flows** pour les parcours principaux (inscription, recherche, achat, vente). Les wireframes basse fidélité ont été validés avant de passer aux **maquettes haute fidélité** sur Figma, où j'ai développé un **design system complet** avec des composants réutilisables. Le prototype final comprend plus de **25 écrans interactifs** avec des micro-animations.",
      learnings: "Ce projet m'a permis de maîtriser le **prototypage avancé** sur Figma (composants, variants, auto-layout, interactions complexes). J'ai appris à créer un **design system cohérent** et à penser '**mobile first**'. La phase de recherche utilisateur m'a également appris à justifier chaque choix de design par des **données concrètes**.",
      skills: ["Prototypage avancé Figma", "Design system mobile", "UX Research", "User flows & wireframing", "Micro-animations", "Direction artistique thématique"],
      difficulties: "Maintenir la **cohérence visuelle** entre l'univers de One Piece et les conventions UX d'une application de marketplace moderne a été un **défi constant**. Certaines animations étaient trop complexes pour le prototype Figma et ralentissaient la navigation. J'ai aussi eu du mal à **hiérarchiser l'information** sur les petits écrans mobiles.",
      overcome: "J'ai créé un **moodboard très détaillé** et une palette de couleurs stricte pour garantir la cohérence. Pour les animations, j'ai simplifié celles qui posaient problème et opté pour des **micro-interactions subtiles** mais efficaces. Concernant la hiérarchie, j'ai réalisé des **tests utilisateurs** avec 5 camarades qui m'ont aidé à identifier les écrans trop chargés.",
      impact: "One Fruit est le projet dont je suis le **plus fier** en termes de design pur. Il m'a confirmé ma passion pour l'**UI/UX mobile** et m'a donné un portfolio piece solide. Les compétences en **design system** et en prototypage sont directement applicables en entreprise. Ce projet m'a aussi appris qu'un bon design, c'est avant tout un design **testé et validé** par de vrais utilisateurs."
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
    fullDescription: "Recherche et sélection de **recettes simples et économiques**, définition d'une **ligne éditoriale**, mise en page sur **InDesign** avec charte graphique sportive et moderne, tests utilisateurs pour améliorer lisibilité et compréhension.",
    detailedSections: {
      context: "Ce projet éditorial avait pour objectif de concevoir un **livre de recettes** destiné aux étudiants sportifs, alliant **nutrition équilibrée** et budget limité. Le défi était de rendre la cuisine accessible et motivante pour un public jeune et actif, tout en respectant les contraintes d'un projet de **mise en page professionnelle** sur InDesign.",
      process: "J'ai commencé par une **recherche approfondie** sur la nutrition sportive et les habitudes alimentaires des étudiants (sondage auprès de 30 camarades). J'ai sélectionné **15 recettes** simples, rapides et économiques, puis défini une **ligne éditoriale dynamique** et colorée. La charte graphique s'inspire des codes du sport avec des couleurs énergiques (orange, vert, bleu). Chaque recette suit un gabarit comprenant : photo, liste d'ingrédients, étapes illustrées, temps de préparation, coût estimé et apports nutritionnels. Le document final fait **48 pages**, entièrement mis en page sur InDesign.",
      learnings: "J'ai considérablement amélioré ma maîtrise d'**InDesign** : gabarits de pages, styles de paragraphes et de caractères, grilles de mise en page, gestion des images et **export PDF professionnel**. J'ai aussi appris les bases de la **direction éditoriale** et l'importance de la cohérence visuelle sur un document long.",
      skills: ["Mise en page InDesign", "Direction éditoriale", "Charte graphique", "Recherche utilisateur (sondage)", "Typographie", "Photographie culinaire"],
      difficulties: "Gérer la mise en page de **48 pages** tout en maintenant une cohérence visuelle parfaite a été chronophage. Les photos de recettes réalisées par nos soins n'étaient pas toujours de **qualité suffisante**, et calibrer les **informations nutritionnelles** demandait des connaissances que je n'avais pas initialement.",
      overcome: "J'ai créé des **gabarits de pages réutilisables** sur InDesign pour garantir la cohérence et gagner du temps. Pour les photos, j'ai improvisé un **mini-studio** (lumière naturelle, fond neutre) et retouché les images sur Lightroom. Pour la nutrition, j'ai consulté des **sources fiables** (Anses, Ciqual) et vérifié chaque information.",
      impact: "Ce projet m'a appris la **rigueur nécessaire** pour un travail éditorial de qualité. InDesign est devenu un outil que je **maîtrise avec confiance**, et je suis capable de produire des documents professionnels print de A à Z. Sur le plan personnel, j'ai découvert un intérêt pour la **nutrition sportive** qui m'accompagne au quotidien."
    },
    image: livreRecetteImg,
    illustrations: [couvertureImg, pageRecetteImg],
    tags: ["InDesign", "Graphisme", "UX"],
    date: "2025",
    category: "Édition / Design",
    group: "Com. visuelle",
  },
  {
    id: 5,
    slug: "bar-maman-douceur",
    title: "Bar à Mamans — Identité visuelle & Maquette",
    description: "Création complète de l'identité visuelle et de la maquette web pour un bar fictif autour du thème des mamans et de la douceur.",
    fullDescription: "Conception d'un **univers de marque complet** pour un bar fictif dédié aux mamans, centré sur la **douceur et le réconfort**. Création du **logo**, de la **direction artistique**, de la **charte graphique** et de la **maquette de site web** sur Figma. Un projet alliant **branding** et **design d'interface** dans un univers chaleureux et élégant.",
    detailedSections: {
      context: "Ce projet personnel consistait à créer un **concept de bar fictif** entièrement pensé autour du thème des mamans et de la **douceur maternelle**. L'idée était d'imaginer un lieu chaleureux et bienveillant, puis de traduire cette **ambiance unique** à travers une identité visuelle complète et un site web immersif.",
      process: "J'ai débuté par une **phase de recherche** sur les codes visuels de la douceur, du cocooning et de l'univers maternel : palettes pastel, typographies rondes et organiques, formes douces. J'ai créé le **logo de la marque** sur Illustrator en travaillant plusieurs itérations jusqu'à obtenir un résultat à la fois **élégant et accueillant**. La **charte graphique** définit les couleurs, typographies, icônes et le ton de communication. Puis j'ai conçu la **maquette complète du site web** sur Figma : page d'accueil, présentation du concept, carte des boissons, galerie photos et page de réservation. Chaque écran respire la **douceur et le soin** avec des espaces généreux et des visuels apaisants.",
      learnings: "Ce projet m'a permis de travailler sur un **branding complet de A à Z**, de l'idéation au livrable final. J'ai approfondi mes compétences en **création de logo**, en **direction artistique** cohérente et en design d'interface adapté à un univers spécifique. J'ai aussi appris à **traduire une émotion** en choix graphiques concrets.",
      skills: ["Création de logo (Illustrator)", "Direction artistique", "Charte graphique", "Prototypage Figma", "Branding complet", "Design émotionnel", "UI Design"],
      difficulties: "Le défi principal était de créer un univers **doux sans être enfantin**, élégant sans être froid. Trouver le **juste équilibre** entre chaleur maternelle et **raffinement esthétique** a demandé de nombreux essais. Le logo a été particulièrement exigeant car il devait **synthétiser** tout l'univers de la marque en un seul symbole.",
      overcome: "J'ai constitué un **moodboard très détaillé** avec des références de branding dans les domaines du bien-être, de la pâtisserie et du lifestyle. J'ai itéré sur **plus de 10 versions du logo** avant d'arriver au résultat final. Pour le site, j'ai fait des **tests de lisibilité** sur les palettes pastel pour garantir l'accessibilité tout en gardant la douceur.",
      impact: "Ce projet démontre ma capacité à **créer un univers de marque cohérent** de bout en bout. Du logo à la maquette web, chaque élément raconte la même histoire. C'est un excellent exemple de ma **polyvalence créative** et de ma sensibilité au **design émotionnel** — une compétence clé pour créer des expériences mémorables."
    },
    image: barImg,
    tags: ["Figma", "Illustrator", "Branding", "UI Design"],
    date: "2025",
    category: "Branding & Maquette web",
    group: "UI/UX",
    link: "https://www.figma.com/proto/iovqcFvsXvcgfvCohx4Ttl/Untitled?page-id=94%3A2&node-id=114-52&viewport=-1825%2C-7715%2C0.28&t=3131Au57vgUPEy0n-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=114%3A52&show-proto-sidebar=1",
  },
  {
    id: 7,
    slug: "scene-3d-aframe",
    title: "Scène 3D interactive — A-Frame",
    description: "Création d'un environnement 3D interactif immersif directement dans le navigateur.",
    fullDescription: "Développement d'une **scène 3D interactive** avec **A-Frame** pour explorer le design immersif sur le web. Ajout de lumières et d'objets interactifs, programmation HTML/JS pour gérer l'**interaction et l'immersion**.",
    detailedSections: {
      context: "Ce projet explorait les possibilités du **web immersif** à travers A-Frame, un framework open-source pour créer des **expériences VR** accessibles directement depuis un navigateur. L'objectif était de concevoir une scène 3D interactive complète, navigable à la souris ou en VR avec un casque, démontrant les capacités du **WebXR**.",
      process: "J'ai d'abord étudié la documentation d'A-Frame et réalisé plusieurs scènes de test pour comprendre le **système d'entités-composants**. Ma scène finale représente un **environnement spatial** avec des planètes en orbite, des astéroïdes interactifs et un vaisseau que l'utilisateur peut explorer. J'ai programmé des **interactions en JavaScript** : cliquer sur un objet affiche des informations, la navigation se fait en première personne, et des **sons d'ambiance** renforcent l'immersion. J'ai aussi intégré des lumières dynamiques (point lights, spot lights) et des **skyboxes personnalisées**.",
      learnings: "Ce projet m'a initié au **développement 3D web** et au paradigme entités-composants. J'ai compris comment fonctionnent les **scènes 3D** (caméras, lumières, materials, meshes) et comment les rendre interactives avec JavaScript. C'était aussi ma **première expérience** avec la réalité virtuelle sur navigateur.",
      skills: ["A-Frame / WebXR", "JavaScript 3D", "Design d'environnement", "Interaction utilisateur VR", "Lumières et materials 3D", "HTML sémantique 3D"],
      difficulties: "Les **performances** étaient un vrai problème : trop d'objets et la scène devenait saccadée, surtout sur mobile. Gérer les **interactions en VR** (raycasting, contrôleurs) était beaucoup plus complexe que prévu. Le **débogage 3D** est aussi très différent du web classique.",
      overcome: "J'ai appris à optimiser en utilisant des **matériaux simples** (flat shading), en réduisant le nombre de polygones et en implémentant du '**level of detail**' (LOD). Pour le VR, j'ai utilisé les composants natifs d'A-Frame (cursor, laser-controls) plutôt que de tout coder manuellement. J'ai aussi utilisé l'**inspecteur A-Frame** intégré pour le débogage visuel.",
      impact: "Ce projet a ouvert ma vision sur le **futur du web**. La 3D interactive et la VR sur navigateur ont un **potentiel immense**, et j'ai acquis des bases solides pour explorer ce domaine. C'est un projet qui impressionne dans un portfolio et qui montre ma **curiosité pour les technologies émergentes**."
    },
    image: "/MonPortfolio/assets/8.png",
    tags: ["A-Frame", "3D", "HTML", "JavaScript"],
    date: "2025",
    category: "Application Web VR",
    group: "3D",
    link: "https://loukkka.github.io/ProjetVirtual/",
  },
  {
    id: 8,
    slug: "ecommerce-basic-fit",
    title: "Site e-commerce Basic Fit",
    description: "Création d'un site e-commerce attractif et responsive.",
    fullDescription: "Conception de l'arborescence et de la navigation pour une **expérience utilisateur fluide**, design **responsive** adapté à tous les supports, **optimisation UX** pour clarifier les parcours et améliorer la conversion.",
    detailedSections: {
      context: "Ce projet consistait à imaginer et concevoir un **site e-commerce** pour la marque **Basic Fit**, permettant la vente de produits dérivés (vêtements de sport, accessoires, compléments alimentaires). L'enjeu était de créer une **expérience d'achat en ligne** cohérente avec l'image de marque énergique et accessible de Basic Fit.",
      process: "J'ai analysé le site existant de Basic Fit et identifié les opportunités pour une boutique en ligne. J'ai défini une **arborescence claire** (Accueil, Catalogue par catégorie, Fiche produit, Panier, Checkout) et créé des wireframes pour chaque page. Le développement a été réalisé en **HTML/CSS pur** avec un focus sur le **responsive design** : la navigation s'adapte parfaitement du desktop au mobile. J'ai utilisé **CSS Grid et Flexbox** pour les mises en page, et des media queries pour les breakpoints. Un soin particulier a été apporté aux parcours d'achat avec des **CTA clairs** et un tunnel de commande simplifié.",
      learnings: "Ce projet a renforcé mes compétences en **HTML/CSS avancé**, particulièrement en responsive design. J'ai appris à penser '**mobile first**' et à concevoir des interfaces qui fonctionnent sur tous les supports. L'optimisation UX du **parcours d'achat** m'a aussi sensibilisé aux enjeux de **conversion e-commerce**.",
      skills: ["HTML5/CSS3 avancé", "Responsive design (mobile first)", "CSS Grid & Flexbox", "UX e-commerce", "Architecture de l'information", "Tunnel de conversion"],
      difficulties: "Rendre le site parfaitement **responsive sans framework CSS** a été un exercice exigeant. Certains composants complexes (le sélecteur de taille, le mini-panier) nécessitaient du JavaScript que je maîtrisais moins à l'époque. Le respect de l'**identité visuelle** Basic Fit tout en créant quelque chose d'original a aussi été un **équilibre délicat**.",
      overcome: "J'ai adopté une approche méthodique en commençant par le **mobile** et en ajoutant progressivement des styles pour les écrans plus grands. Pour le JavaScript, j'ai étudié des **tutoriels ciblés** et décomposé chaque fonctionnalité en petites étapes. J'ai aussi créé un **mini guide de style** reprenant les codes de Basic Fit (couleurs, typos, iconographie) pour garantir la cohérence.",
      impact: "Ce projet m'a donné une **base solide en intégration web pure**, sans dépendance à un framework. C'est une compétence fondamentale qui me sert dans tous mes projets. Comprendre les **enjeux UX de l'e-commerce** est aussi un atout professionnel majeur, car la plupart des entreprises ont besoin de vendre en ligne."
    },
    image: basicFitImg,
    illustrations: ["/MonPortfolio/assets/7.png"],
    tags: ["HTML", "CSS", "Responsive", "UX"],
    date: "2025",
    category: "Site e-commerce",
    group: "Web design",
    link: "https://www.figma.com/proto/DperLPkVC8sixEswQ9MigY/SAE301?page-id=20%3A2&node-id=25-87&viewport=880%2C342%2C0.25&t=8L8SjyawhpiMbXPC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=25%3A87",
  },
  {
    id: 9,
    slug: "interstellar-rolex-3d",
    title: "Interstellar X Rolex — Immersion 3D",
    description: "Projet de collaboration fictive entre Interstellar et Rolex pour créer une expérience immersive en 3D.",
    fullDescription: "Création d'un projet conceptuel imaginant une collaboration entre le film **Interstellar** et la marque de luxe **Rolex**. Développement d'une **expérience immersive en 3D** combinant l'univers cinématographique d'Interstellar avec l'élégance horlogère de Rolex. **Modélisation 3D**, mise en scène et rendu pour créer une atmosphère spatiale unique alliant technologie et luxe.",
    detailedSections: {
      context: "Ce projet personnel est né de ma double passion pour le **cinéma de science-fiction** et le **design de produits de luxe**. L'idée : imaginer une collaboration entre le film Interstellar de Christopher Nolan et la maison horlogère Rolex, pour créer une **montre en édition limitée** présentée dans un univers 3D immersif. Un exercice de **direction artistique** ambitieux mêlant storytelling et modélisation 3D.",
      process: "J'ai commencé par un travail de **recherche approfondi** sur l'esthétique du film Interstellar (couleurs, textures, ambiance spatiale) et sur les montres Rolex (détails, matériaux, reflets). Sur **Blender**, j'ai modélisé une montre Rolex fictive intégrant des éléments d'Interstellar (cadran inspiré du **trou noir Gargantua**, bracelet avec des motifs de vagues de Miller). La scène 3D place la montre en lévitation dans un espace cosmique avec des effets de **lumière volumétrique**, des étoiles et une courbure gravitationnelle. Le rendu final utilise **Cycles** pour un photoréalisme optimal.",
      learnings: "Ce projet m'a fait progresser considérablement en **modélisation 3D** : hard surface modeling pour la montre, sculpting pour les détails, création de **matériaux PBR réalistes**. J'ai aussi appris le **compositing** sur Blender et les techniques d'**éclairage studio** pour le rendu produit.",
      skills: ["Modélisation Blender (hard surface)", "Matériaux PBR", "Éclairage studio 3D", "Rendu Cycles photoréaliste", "Direction artistique conceptuelle", "Compositing", "Storytelling visuel"],
      difficulties: "Modéliser une montre avec un **niveau de détail réaliste** est extrêmement exigeant : chaque vis, chaque graduation, chaque reflet doit être parfait. Les **temps de rendu** étaient aussi très longs (plusieurs heures par image). Créer l'effet de **trou noir** de manière convaincante nécessitait des connaissances en physique et en **shaders avancés**.",
      overcome: "Je me suis formé avec des tutoriels spécialisés en **hard surface modeling** et j'ai décomposé la montre en sous-parties modélisées séparément. Pour réduire les temps de rendu, j'ai **optimisé les light paths** et utilisé le denoising. Pour le trou noir, j'ai étudié les références visuelles du film et utilisé des **shaders procéduraux** avec des nœuds de distorsion.",
      impact: "Ce projet représente pour moi un **tournant dans ma pratique de la 3D**. Il combine créativité, technique et storytelling — trois piliers de mon approche du design. Il démontre ma capacité à **porter un projet ambitieux** seul, de la conception à la livraison. C'est aussi un excellent sujet de conversation en entretien qui montre ma **passion et ma curiosité**."
    },
    image: interstellarRolexHeroImg,
    illustrations: [interstellarRolexImg],
    tags: ["Blender", "3D", "Concept Design"],
    date: "2025",
    category: "Projet 3D",
    group: "3D",
    link: "https://loukkka.github.io/InterstellarXRolex/",
  },
  {
    id: 10,
    slug: "nuit-mmi-motion-design",
    title: "Nuit MMI 2026 — Motion Design",
    description: "Création d'une affiche animée et vidéo motion design pour l'événement Nuit MMI 2026.",
    fullDescription: "Réalisation d'un **motion design** pour promouvoir la **Nuit MMI 2026**, événement annuel du BUT MMI. Conception de l'**identité visuelle** avec un univers spatial et nocturne, animation des typographies et éléments graphiques. **Production vidéo complète** incluant storyboard, animation sur After Effects et montage final.",
    detailedSections: {
      context: "La Nuit MMI est l'**événement phare annuel** du BUT MMI de Limoges : une soirée de présentation des projets étudiants devant un public de professionnels, de familles et de futurs étudiants. J'ai été sélectionné pour créer le **motion design promotionnel** de l'édition 2026, avec **carte blanche** sur la direction artistique.",
      process: "J'ai proposé un univers **spatial et nocturne**, symbolisant l'exploration créative et l'innovation qui caractérisent le MMI. Le processus a commencé par un **storyboard de 20 plans**, suivi de la création des assets graphiques sur Illustrator (typographies personnalisées, illustrations de planètes, fusées, étoiles). L'animation a été réalisée sur **After Effects** avec un travail approfondi sur le rythme (calé sur une musique libre de droits), les **transitions** (morphing, parallaxe) et les effets (particules, glow, grain cinématique). Le résultat est une **vidéo de 30 secondes** au format vertical, optimisée pour Instagram et les stories.",
      learnings: "Ce projet m'a permis de maîtriser le **workflow complet du motion design** : du brief au livrable final. J'ai approfondi mes compétences en animation sur **After Effects** (expressions, parentage, effets de particules) et appris à **synchroniser précisément** l'animation avec le son. La **gestion du temps** a été cruciale car j'avais un deadline strict.",
      skills: ["After Effects (animation avancée)", "Storyboarding", "Motion design", "Illustrator (assets)", "Sound design", "Format vertical / réseaux sociaux", "Gestion de deadline"],
      difficulties: "Animer des **typographies de manière dynamique** et lisible est plus complexe qu'il n'y paraît. Certaines transitions entre les plans ne fonctionnaient pas comme prévu et j'ai dû **revoir le storyboard** en cours de route. Le rendu final était aussi très lourd et nécessitait une **compression intelligente** pour les réseaux sociaux sans perdre en qualité.",
      overcome: "Pour les typographies, j'ai étudié des références de **motion design professionnel** (Behance, Dribbble) et pratiqué des techniques d'animation de texte mot par mot et lettre par lettre. J'ai utilisé des **pre-compositions** dans After Effects pour tester chaque transition isolément avant de les assembler. Pour la compression, j'ai utilisé **Adobe Media Encoder** avec des presets personnalisés.",
      impact: "Voir ma vidéo diffusée lors de l'événement officiel devant **plus de 200 personnes** a été un moment extrêmement gratifiant. Ce projet m'a confirmé que le **motion design est une passions** que je veux développer professionnellement. Il démontre ma capacité à porter un **projet créatif de A à Z** sous pression, et constitue une réalisation concrète et visible dans mon portfolio."
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
    fullDescription: "Rocamtour est un **parcours culturel innovant** et immersif à Rocamadour accessible pour tout niveau. Projet complet incluant la **conception de l'événement** de A à Z, la création d'une **identité visuelle** cohérente, la maquette du site web sur Figma, la production de contenu pour les réseaux sociaux, et la réalisation d'une **vidéo promotionnelle** dynamique.",
    detailedSections: {
      context: "Ce projet avait pour objectif de concevoir un **événement innovant de A à Z**, puis de développer toute l'identité visuelle et les outils de communication associés. **Rocamadour**, destination touristique emblématique, était le point de départ pour imaginer une **expérience culturelle immersive** et moderne.",
      process: "J'ai d'abord défini le concept et les modalities de Rocamtour : un **parcours culturel interactif** mêlant histoire, art contemporain et technologie. Ensuite, j'ai créé une **identité visuelle** avec palette de couleurs, typographies et iconographie consacées. La maquette du site web sur **Figma** présente les pages principales : accueil, présentation du parcours, réservations et galerie média. Des illustrations et animations enrichissent l'expérience. La **vidéo promotionnelle de 30 secondes** a été créée avec motion design pour donner un avant-goût immersif de l'événement. Des visuels pour **réseaux sociaux** (stories, posts carrés) complètent la stratégie de communication.",
      learnings: "Ce projet m'a enseigné à gérer un **projet complet** de la conception d'un concept jusqu'à sa communication. J'ai approfondi ma compréhension du **branding** et de la **cohérence visuelle cross-media**. La production vidéo m'a permis de mettre en pratique le motion design dans un contexte promotionnel réaliste.",
      skills: ["Stratégie d'événement", "Identité visuelle / Branding", "Prototypage Figma", "Motion design vidéo", "Content creation réseaux sociaux", "Direction artistique", "Copywriting"],
      difficulties: "Créer une **expérience événementielle innovante** tout en restant viable était un vrai défi. Il fallait réfléchir aux contraintes territ, logistiques et budgétaires. Faire cohérence entre l'identité visuelle for web, **réseaux sociaux et vidéo** requérait une **vision créative forte** mais maîtrisée.",
      overcome: "J'ai d'abord étudié d'autres **événements culturels innovants** et leurs stratégies de communication pour m'inspirer. J'ai créé un **guide de style complet** pour assurer la cohérence cross-media. Pour la vidéo, j'ai réalisé **plusieurs versions** avant d'affiner le concept final.",
      impact: "Ce projet m'a montré ma capacité à gérer un **projet d'envergure** impliquant design, motion design et stratégie. C'est un excellent exemple dans mon portfolio de capacité à **marier créativité et cohérence visuelle**. Rocamtour représente mon intérêt pour les projets qui intègrent **plusieurs disciplines créatives**."
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
  {
    id: 11,
    slug: "olive-oil-luxury-maquette",
    title: "Olive Oil — Maquette vitrine luxe",
    description: "Conception d'une maquette de site vitrine haut de gamme pour une marque fictive d'huile d'olive de luxe.",
    fullDescription: "Création d'une **maquette de site vitrine premium** pour une marque fictive d'huile d'olive artisanale et luxueuse. Travail approfondi sur l'**identité visuelle**, la **typographie raffinée**, les **couleurs dorées et terreuses** et la mise en valeur du produit à travers un design épuré et élégant. Prototype interactif complet réalisé sur **Figma**.",
    detailedSections: {
      context: "Ce projet personnel avait pour objectif de concevoir un **site vitrine haut de gamme** pour une marque fictive d'huile d'olive artisanale. L'idée était de travailler sur un **positionnement luxe** en appliquant les codes visuels du premium — espaces généreux, typographies élégantes, photographies en haute qualité et **animations subtiles**. Un exercice de **direction artistique** poussé centré sur l'émotion et le storytelling produit.",
      process: "J'ai commencé par une **phase de recherche** : analyse des sites de marques premium (cosmétiques, gastronomie, vins) pour identifier les **codes visuels du luxe**. J'ai défini une palette de couleurs autour de **tons dorés, noirs et crème** pour évoquer l'authenticité et le raffinement. Sur Figma, j'ai conçu un **design system complet** avec des composants réutilisables (cartes produits, sections immersives, navigation fluide). Le prototype comprend plusieurs pages : **landing page immersive**, page produit détaillée, section histoire de la marque et page contact. Chaque écran met en avant le produit avec des **mises en scène visuelles** inspirées du packaging de luxe.",
      learnings: "Ce projet m'a appris à maîtriser les **codes du design premium** : la gestion des espaces négatifs, la hiérarchie typographique fine, et l'importance des **micro-détails** dans un positionnement luxe. J'ai aussi approfondi mes compétences en **prototypage interactif** avancé sur Figma avec des animations de scroll et des transitions fluides.",
      skills: ["Direction artistique luxe", "Design system Figma", "Prototypage interactif", "Typographie avancée", "Palette chromatique premium", "Storytelling visuel", "UX design"],
      difficulties: "Le principal défi était de **capturer l'essence du luxe** sans tomber dans le kitsch ou le surchargé. Trouver le bon équilibre entre **minimalisme et richesse visuelle** demandait une sensibilité particulière. La mise en page des sections avec de grandes images tout en gardant des **performances optimales** était aussi un enjeu.",
      overcome: "J'ai étudié en détail les sites de marques comme **Aesop, Diptyque et Le Labo** pour comprendre comment elles combinent sobriété et élégance. J'ai appliqué la règle du '**less is more**' en réduisant chaque écran à l'essentiel. Pour les images, j'ai travaillé sur des **compositions épurées** avec beaucoup d'espace blanc et des typographies serif élégantes.",
      impact: "Ce projet démontre ma capacité à **adapter mon design** à un positionnement spécifique et exigeant. Il prouve que je peux concevoir des interfaces qui **transmettent une émotion** et racontent une histoire de marque. C'est une pièce de portfolio qui montre ma **polyvalence** et mon attention aux détails dans un registre différent de mes autres projets."
    },
    image: oliveOilImg,
    tags: ["Figma", "UI Design", "Branding", "Luxe"],
    date: "2025",
    category: "Maquette vitrine",
    group: "UI/UX",
    link: "https://www.figma.com/proto/Eu0El5l8syINR1npg2mmXk/Louka-Poulbriere---Olive-Oil?page-id=0%3A1&node-id=61-67&viewport=-5161%2C842%2C0.43&t=cJ93qSOmO20h68rp-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    id: 12,
    slug: "rubilax-motion-design-3d",
    title: "Rubilax — Motion Design 3D",
    description: "Vidéo motion design mêlant 3D et After Effects pour promouvoir un article fictif inspiré de l'univers Wakfu.",
    fullDescription: "Réalisation d'une **vidéo promotionnelle** pour un article fictif d'e-commerce mettant en scène **Rubilax**, personnage emblématique de l'univers de **Wakfu**. Le projet combine **modélisation 3D** et **animation motion design** sur After Effects pour créer un rendu dynamique et immersif au service d'un concept de **boutique en ligne fictive**.",
    detailedSections: {
      context: "Ce projet avait pour objectif de réaliser une **vidéo promotionnelle** pour un site e-commerce fictif, en mettant en avant un article inspiré de l'univers de **Wakfu**. Le personnage choisi, **Rubilax** — l'épée démoniaque iconique — se prêtait parfaitement à une mise en scène visuelle **percutante et dynamique**. L'idée était de simuler une vraie campagne produit avec un rendu professionnel.",
      process: "J'ai commencé par définir le **concept créatif** : une présentation produit cinématique avec des transitions fluides et un rythme soutenu. La **modélisation 3D** de l'objet a été réalisée puis intégrée dans une composition **After Effects** avec des effets de lumière, des particules et des **animations typographiques**. Le montage final alterne entre des plans 3D du produit et des éléments graphiques 2D pour créer un rendu **hybride** très dynamique. J'ai porté une attention particulière au **sound design** et au rythme pour renforcer l'impact visuel.",
      learnings: "Ce projet m'a appris à **combiner 3D et motion design** de manière fluide. J'ai approfondi mes compétences en **compositing** sur After Effects, notamment l'intégration d'éléments 3D dans une composition 2D. J'ai aussi amélioré ma maîtrise du **rythme et du pacing** en motion design promotionnel.",
      skills: ["After Effects (compositing)", "Modélisation 3D", "Motion design promotionnel", "Animation typographique", "Sound design", "Direction artistique", "Intégration 3D/2D"],
      difficulties: "Le principal défi était d'**intégrer harmonieusement** les éléments 3D dans la composition After Effects sans que la différence de rendu soit visible. Le **timing des transitions** devait être parfaitement calé pour maintenir l'énergie de la vidéo. Respecter les codes d'une **vraie publicité produit** tout en gardant une identité créative forte était aussi un équilibre délicat.",
      overcome: "J'ai travaillé sur le **color grading** pour unifier les éléments 3D et 2D sous une même ambiance visuelle. Pour le rythme, j'ai d'abord monté un **animatique** rapide avant de passer aux animations finales. J'ai aussi étudié des **publicités e-commerce** professionnelles pour m'inspirer des codes visuels et des transitions utilisées dans le secteur.",
      impact: "Ce projet démontre ma capacité à produire du **contenu vidéo promotionnel** de qualité professionnelle. Il combine mes compétences en **3D et en motion design** dans un contexte commercial concret. C'est une pièce de portfolio qui montre ma **polyvalence technique** et mon sens du storytelling visuel appliqué au marketing."
    },
    image: rubilaxImg,
    tags: ["After Effects", "3D", "Motion Design"],
    date: "2025",
    category: "Motion Design 3D",
    group: "Vidéo",
    link: "https://youtube.com/shorts/P9F_uq-aoms",
  },
  {
    id: 13,
    slug: "digital-cleanup-day-maquette",
    title: "Digital Cleanup Day — Maquette web",
    description: "Maquette de site web pour sensibiliser au Digital Cleanup Day et encourager le tri des mails pour réduire l'empreinte numérique.",
    fullDescription: "Conception d'une **maquette de site web** pour le **Digital Cleanup Day**, une journée mondiale de sensibilisation à la **pollution numérique**. L'objectif : inciter les utilisateurs à **trier leurs mails** et supprimer les données inutiles pour réduire l'impact environnemental du numérique. Design engageant avec une approche **éco-responsable** et pédagogique.",
    detailedSections: {
      context: "Le **Digital Cleanup Day** est un événement international qui invite chacun à **nettoyer ses données numériques** pour réduire la pollution digitale. Ce projet avait pour but de concevoir un **site web engageant** qui sensibilise le grand public à l'impact environnemental de nos habitudes numériques, en se concentrant notamment sur le **tri des e-mails** — un geste simple mais à fort impact.",
      process: "J'ai d'abord mené des **recherches** sur la pollution numérique et les chiffres clés (un e-mail stocké = 10g de CO₂/an). J'ai ensuite défini une **direction artistique** éco-responsable : palette de **verts et bleus naturels**, typographies modernes et lisibles, et iconographie pédagogique. La maquette sur **Figma** comprend une page d'accueil immersive avec des **chiffres percutants**, une section explicative sur l'impact des mails, un **guide interactif** pas à pas pour trier ses mails, et un call-to-action pour s'inscrire à l'événement. J'ai porté une attention particulière à l'**expérience utilisateur** pour rendre le message accessible et motivant.",
      learnings: "Ce projet m'a sensibilisé à l'**éco-conception web** et aux bonnes pratiques de design durable. J'ai appris à **communiquer un message engagé** à travers le design, en utilisant la **data visualisation** et le storytelling visuel pour rendre des données complexes compréhensibles et impactantes.",
      skills: ["UI Design (Figma)", "Éco-conception web", "Direction artistique", "Data visualisation", "UX writing", "Storytelling visuel", "Design engagé"],
      difficulties: "Le défi principal était de **rendre le sujet attractif** sans être moralisateur. Il fallait trouver le bon ton entre **sensibilisation et engagement** positif. Présenter des données environnementales de manière visuelle sans surcharger l'interface était aussi un **équilibre délicat** à trouver.",
      overcome: "J'ai opté pour un ton **positif et ludique** plutôt que culpabilisant, en mettant en avant les bénéfices concrets du tri. J'ai utilisé des **illustrations légères** et des animations suggérées pour rendre le parcours agréable. Pour les données, j'ai créé des **infographies minimalistes** intégrées au design pour maintenir la fluidité de lecture.",
      impact: "Ce projet m'a permis de démontrer que le **design peut servir une cause**. Il montre ma capacité à concevoir des interfaces à **vocation pédagogique** et engageante. C'est également un excellent exemple de ma sensibilité aux enjeux **écologiques du numérique**, une thématique de plus en plus importante dans le métier de designer."
    },
    image: digitalCleanupImg,
    tags: ["Figma", "UI Design", "Éco-conception"],
    date: "2025",
    category: "Maquette web",
    group: "UI/UX",
    link: "https://www.figma.com/design/sldb8IFc3n7VWVVtz4j9gZ/maquette-clean-up-day?node-id=0-1&t=13H6I11v7v7AZcDi-1",
  },
  {
    id: 14,
    slug: "intelligence-collective-motion",
    title: "Intelligence Collective — Motion Design",
    description: "Vidéo motion design de 30 secondes expliquant le concept d'intelligence collective de manière métaphorique et visuelle.",
    fullDescription: "Réalisation d'une **vidéo de 30 secondes** en motion design pour **vulgariser le concept d'intelligence collective**. Le défi : rendre accessible un sujet **complexe et abstrait** à travers des **métaphores visuelles** percutantes et un storytelling imagé, le tout animé sur **After Effects**.",
    detailedSections: {
      context: "L'**intelligence collective** est un concept qui peut sembler abstrait et difficile à appréhender au premier abord. Ce projet avait pour objectif de **rendre ce concept accessible** à travers une vidéo courte et impactante. L'enjeu était de transformer une idée **théorique et complexe** en quelque chose de visuel, intuitif et mémorable en seulement 30 secondes.",
      process: "J'ai commencé par une **phase de recherche** sur l'intelligence collective pour en extraire les idées clés : la force du groupe, la synergie, la diversité des perspectives et l'émergence de solutions collectives. J'ai ensuite développé un **storyboard métaphorique** utilisant des images fortes — comme des éléments individuels qui se rejoignent pour former un ensemble plus grand et plus puissant. L'animation a été réalisée sur **After Effects** avec un travail soigné sur le **rythme et les transitions** pour guider le spectateur dans la compréhension progressive du concept. Le **sound design** accompagne chaque transition pour renforcer l'impact émotionnel.",
      learnings: "Ce projet m'a appris l'art de la **vulgarisation visuelle** : comment transformer un concept abstrait en images compréhensibles. J'ai approfondi ma maîtrise du **storytelling en motion design** et compris l'importance du **timing et du rythme** pour maintenir l'attention sur un format court.",
      skills: ["After Effects (animation)", "Storytelling visuel", "Vulgarisation graphique", "Storyboarding", "Sound design", "Motion design conceptuel", "Métaphores visuelles"],
      difficulties: "Le plus grand défi était de **synthétiser un concept riche** en seulement 30 secondes sans le dénaturer. Trouver les bonnes **métaphores visuelles** qui parlent à tout le monde, sans être trop littérales ni trop abstraites, a demandé de nombreuses itérations. Le **rythme** devait être parfaitement calibré pour que chaque seconde compte.",
      overcome: "J'ai testé **plusieurs approches narratives** avant de trouver la bonne. J'ai montré mes premières versions à des camarades pour vérifier que le message passait sans explication textuelle. J'ai simplifié progressivement jusqu'à obtenir un résultat **clair et fluide**. Pour le rythme, j'ai travaillé avec une **musique choisie en amont** pour caler chaque transition sur le tempo.",
      impact: "Ce projet démontre ma capacité à **communiquer des idées complexes** par le visuel. C'est une compétence essentielle en design et en communication. La vidéo prouve que je sais allier **créativité et pédagogie**, un atout majeur pour des projets de **communication corporate** ou de contenu éducatif."
    },
    image: intelligenceCollectiveImg,
    tags: ["After Effects", "Motion Design", "Storytelling"],
    date: "2025",
    category: "Motion Design",
    group: "Vidéo",
    link: "https://youtu.be/PjUaH2epPdQ",
  },
];
