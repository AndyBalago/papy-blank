# Papy Blank

Site web de Papy Blank, construit avec [Astro](https://astro.build) (pages HTML statiques, presque sans JavaScript).

## Commandes

Requiert Node.js 22 ou plus récent.

| Commande          | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Installe les dépendances                        |
| `npm run dev`     | Serveur de développement sur `localhost:4321`   |
| `npm run build`   | Génère le site final dans `dist/`               |
| `npm run preview` | Sert `dist/` en local pour vérifier le build    |

## Structure

```
public/                  Fichiers servis tels quels (vidéo, police, favicon, .htaccess)
src/
  config/site.ts         Coordonnées, réseaux sociaux, liens de commande, EmailJS, menu
  layouts/BaseLayout     <head> (SEO), navbar, footer, modal de commande
  components/
    layout/              Navbar, Footer, barre des réseaux sociaux
    order/OrderModal     Modal « Commander » (tout élément avec data-order-open l'ouvre)
    home/                Sections propres à l'accueil (hero, galeries)
    ui/                  Button, Icon
  pages/                 Une page = une URL (index, le-concept, la-ferme, contact…)
  styles/
    global.css           Police, couleurs (variables CSS), règles de base
    pages/               CSS propre à chaque page
  assets/
    images/              Photos optimisées automatiquement au build (WebP, plusieurs tailles)
    backgrounds/         Images de fond utilisées dans le CSS (déjà optimisées)
```

## Tâches courantes

- **Changer un téléphone, un e-mail ou un lien de commande** : `src/config/site.ts`.
- **Ajouter une photo** : la placer dans `src/assets/images/`, puis l'importer dans la page
  et l'afficher avec le composant `<Image>` d'`astro:assets`.
- **Déployer** : `npm run build`, puis envoyer le contenu de `dist/` (y compris `.htaccess`)
  dans `public_html` sur Hostinger.
