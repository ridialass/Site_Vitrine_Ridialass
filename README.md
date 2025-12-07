# Site vitrine – Mamadou Gaye Diop

Site vitrine statique pour présenter mon activité de technicien réseau & systèmes indépendant
(câblage LAN, fibre, WiFi, vidéosurveillance IP, mise en service réseau).

## Structure

- `index.html` : page principale (FR / EN / IT, avec sélecteur de langue)
- `style.css` : styles (mise en page, couleurs, responsive)
- `script.js` : logique de changement de langue, année dynamique
- `img/mamadou-profile.jpg` : photo de profil
- `docs/` : CV au format PDF (FR / EN / IT)

## Utilisation en local

1. Cloner ou copier le dossier du site.
2. Ouvrir `index.html` dans un navigateur (double clic).

## Déploiement sur GitHub Pages

1. Créer un dépôt GitHub et y pousser les fichiers.
2. Sur GitHub, aller dans **Settings > Pages**.
3. Dans **Source**, choisir `Deploy from a branch`.
4. Sélectionner la branche (`main`) et le dossier `/root`.
5. Sauvegarder : GitHub fournit une URL publique au bout de quelques minutes.

## Déploiement sur Netlify

1. Aller sur [https://app.netlify.com/](https://app.netlify.com/)
2. Option A : connecter le dépôt GitHub (**New site from Git**)
3. Option B : glisser/déposer le dossier du site dans **Deploy manually**
4. Netlify génère une URL publique automatiquement.

Le site étant entièrement statique (HTML/CSS/JS), aucune configuration serveur n’est nécessaire.
