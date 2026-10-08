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
- **Déployer** : chaque `git push` sur `master` publie le site automatiquement
  (voir ci-dessous).

## Déploiement automatique

Le workflow `.github/workflows/deploy.yml` compile le site puis envoie `dist/` sur Hostinger
en FTPS (`ftp.papyblank.fr`, compte FTP limité à `public_html`). Les identifiants sont des
secrets du dépôt GitHub : `FTP_USERNAME` et `FTP_PASSWORD`.

- Suivre une publication : onglet **Actions** du dépôt sur GitHub.
- Republier sans changer le code : **Actions → Deploy to Hostinger → Run workflow**.
- Publier à la main (secours) : `npm run build`, puis copier `dist/` dans `public_html` avec FileZilla.
