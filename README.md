# Fiscal Recorder Demo

🧾 Sistema per registratore fiscale realizzato con React e TypeScript

## Descrizione

Questa repository è stata creata come dimostrazione delle funzionalità del server GitHub MCP. Il progetto simula un sistema POS (Point of Sale) per registratore fiscale.

## Funzionalità

- ✅ Gestione prodotti
- ✅ Carrello della spesa
- ✅ Calcolo totale con IVA
- ✅ Elaborazione pagamenti
- ✅ Interfaccia React moderna

## Tecnologie Utilizzate

- **React 18** - Framework frontend
- **TypeScript** - Linguaggio tipizzato
- **Vite** - Build tool veloce
- **CSS3** - Styling

## Struttura del Progetto

```
fiscal-recorder-demo/
├── src/
│   └── components/
│       └── FiscalRecorder.tsx
├── package.json
└── README.md
```

## Installazione

```bash
# Clona la repository
git clone https://github.com/cloud3-srl/fiscal-recorder-demo.git

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

## Uso

1. Seleziona i prodotti dalla griglia
2. Visualizza il carrello con quantità e prezzi
3. Processa il pagamento
4. Stampa lo scontrino fiscale

## Componenti Principali

### FiscalRecorder

Componente principale che gestisce:
- Stato del carrello
- Calcolo totali
- Elaborazione pagamenti
- Interfaccia utente

## Licenza

MIT License - Cloud3 SRL

---

*Repository creata utilizzando il server GitHub MCP per dimostrare le funzionalità di integrazione GitHub.*