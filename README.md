# Ping API Server

Un serveur API simple qui retourne les headers de la requête en format JSON lorsqu'une requête GET est faite sur `/ping`.

## Fonctionnalités

- Écoute les requêtes HTTP sur un port configurable
- Répond avec les headers de la requête au format JSON pour les requêtes GET sur `/ping`
- Retourne un code 404 sans contenu pour toute autre requête

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn

## Installation

1. Clonez ce dépôt
```bash
git clone https://github.com/kilbertusrobin/ts_devops.git
cd ts_devops
```

2. Installez les dépendances
```bash
npm install
```

## Lancement du serveur

### Option 1: Utilisation du mode développement (recommandé pour le développement)

Lancez le serveur directement avec ts-node (sans compilation préalable) :

```bash
npm run dev
```

### Option 2: Compilation puis exécution

1. Compilez le code TypeScript en JavaScript :
```bash
npm run build
```

2. Lancez le serveur avec le code compilé :
```bash
npm start
```

## Configuration du port

Par défaut, le serveur écoute sur le port 7. Vous pouvez spécifier un port différent en utilisant la variable d'environnement `PING_LISTEN_PORT` :

```bash
# Sous Linux/Mac
PING_LISTEN_PORT=8080 npm start

# Sous Windows (PowerShell)
$env:PING_LISTEN_PORT=8080; npm start

# Sous Windows (CMD)
set PING_LISTEN_PORT=8080 && npm start
```

## Test de l'API

Pour tester l'API, envoyez une requête GET à `/ping` :

```bash
# Avec curl
curl http://localhost:7/ping

# Avec un navigateur
# Ouvrez simplement http://localhost:7/ping dans votre navigateur
```

Vous recevrez une réponse JSON contenant les headers de votre requête.



## Dépannage

Si vous rencontrez l'erreur `Cannot find module 'dist/server.js'` lorsque vous exécutez `npm start`, assurez-vous d'avoir d'abord compilé le code avec `npm run build`.