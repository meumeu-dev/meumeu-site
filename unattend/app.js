/* unattend — autounattend.xml generator (meumeu.dev)
   Full rebuild of the schneegans-style option set, in FR/EN/DE/ES.
   Static, no dependency, no network: everything is generated client-side. */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- i18n */

  var I18N = {
    fr: {
      intro: 'Génère un fichier <strong>autounattend.xml</strong> pour une installation Windows 10/11 sans intervention. Tout se passe dans ton navigateur : aucune donnée n\'est envoyée, le fichier est construit localement.',
      preview: 'autounattend.xml', clientside: '100 % local',
      download: 'Télécharger', copy: 'Copier', reset: 'Réinitialiser', copied: 'Copié !',
      optional: '(facultatif)',
      note: 'Place le fichier à la <strong>racine</strong> de la clé USB (ou d\'un second ISO pour une VM). Le setup le lit au démarrage : après modification, relance l\'installation. Vérifie le nom d\'édition avec <code>dism /Get-WimInfo /WimFile:install.wim</code>.',
      footer: 'Générateur statique, sans dépendance, sans serveur. Inspiré de schneegans.de.',

      sec_sys: 'Système cible', sec_loc: 'Langue & région', sec_disk: 'Disque',
      sec_machine: 'Nom de la machine', sec_account: 'Comptes', sec_oobe: 'Assistant OOBE',
      sec_win11: 'Windows 11', sec_clean: 'Nettoyage', sec_privacy: 'Vie privée',
      sec_ui: 'Interface', sec_sysopt: 'Réglages système', sec_net: 'Réseau Wi-Fi',
      sec_drv: 'Pilotes & scripts',

      winver: 'Version de Windows', arch: 'Architecture', edition: 'Édition',
      productkey: 'Clé produit',
      locale: 'Langue d\'installation', tz: 'Fuseau horaire',
      diskpart: 'Partitionnement', disk: 'Numéro de disque', winold: 'Supprimer Windows.old',
      computername: 'Nom de l\'ordinateur', username: 'Nom d\'utilisateur', password: 'Mot de passe',
      autologon: 'Connexion automatique', pwnever: 'Mot de passe sans expiration',
      nolock: 'Désactiver le verrouillage de session',
      skipoobe: 'Passer l\'assistant OOBE', bypassnet: 'Contourner l\'exigence de connexion',
      bypass: 'Contourner les prérequis Windows 11',
      debloat: 'Supprimer les applications préinstallées', onedrive: 'Désinstaller OneDrive',
      appsugg: 'Désactiver les suggestions d\'applications', widgets: 'Désactiver les widgets',
      copilot: 'Désactiver Copilot', qol: 'Optimisations (bundle Rufus)',
      sanpolicy: 'Disques internes hors ligne',
      bing: 'Désactiver Bing dans la recherche',
      keyboard: 'Disposition du clavier', kb_auto: 'Identique à la langue d\'installation',
      wifi: 'Se connecter au Wi-Fi automatiquement', ssid: 'Nom du réseau (SSID)',
      wifipw: 'Mot de passe Wi-Fi', wifihidden: 'Réseau masqué (SSID non diffusé)',
      users: 'Comptes supplémentaires (un par ligne)',
      deskIcons: 'Ce PC, Réseau et Corbeille sur le bureau',
      visualfx: 'Effets visuels : privilégier les performances',
      startBlank: 'Menu Démarrer vide (aucune tuile épinglée)',
      startNoRecs: 'Masquer les « Recommandations » du menu Démarrer',
      numlock: 'Activer le pavé numérique (Verr. Num) au démarrage',
      mouseAccel: 'Désactiver l\'accélération de la souris',
      edgeBoost: 'Désactiver le préchargement d\'Edge',
      applocker: 'AppLocker : bloquer l\'exécution hors Program Files / Windows',
      vboxga: 'Installer les VirtualBox Guest Additions',
      vmwaretools: 'Installer les VMware Tools',
      virtio: 'Installer les pilotes VirtIO (Proxmox, KVM, QEMU)',
      privacy: 'Réduire la télémétrie',
      showExt: 'Afficher les extensions de fichiers', classicMenu: 'Menu contextuel classique',
      launchThisPC: 'Ouvrir l\'Explorateur sur Ce PC', darkMode: 'Thème sombre',
      taskbarLeft: 'Barre des tâches à gauche', hideTaskView: 'Masquer « Vue des tâches »',
      showEndTask: '« Terminer la tâche » dans la barre des tâches',
      trayAll: 'Afficher toutes les icônes de notification', searchMode: 'Recherche dans la barre des tâches',
      longpaths: 'Chemins de plus de 260 caractères', psscripts: 'Autoriser les scripts PowerShell',
      rdp: 'Activer le Bureau à distance', fastboot: 'Désactiver le démarrage rapide',
      sysrestore: 'Désactiver la restauration système', smartscreen: 'Désactiver SmartScreen',
      uac: 'Désactiver l\'UAC', deviceenc: 'Empêcher le chiffrement automatique du disque',
      oemdrv: 'Installer les pilotes du dossier', drvpath: 'Dossier des pilotes sur la clé',
      cmds: 'Commandes au premier démarrage (une par ligne)',

      h_edition: 'Nom exact de l\'image, en anglais', h_bypass: 'TPM 2.0, Secure Boot, RAM, CPU — VM et matériel non supporté.',
      h_bypassnet: 'Masque l\'écran « pas de connexion » de l\'OOBE.', h_debloat: 'Bing, Xbox, Teams, Clipchamp, Solitaire… au premier démarrage.',
      h_uac: 'Déconseillé : l\'UAC ne protège plus rien.', h_drvpath: 'Copie les .inf dans sources\\$OEM$\\$1\\Drivers',
      h_cmds: 'Exécutées en admin après la première ouverture de session.', h_winold: 'Libère plusieurs Go après l\'installation.',
      h_qol: 'Copilot, OneDrive, Outlook, Teams, publicités, actualités, menu classique.',
      h_sanpolicy: 'SanPolicy=4 — pour une clé système / Windows To Go.',
      h_wifi: 'Un profil WPA2 est créé et importé automatiquement pendant l\'installation.',
      h_users: 'Format : nom:motdepasse:Administrators — le 3e champ est facultatif (Users par défaut).',
      h_keyboard: 'Utile si tu installes en anglais avec un clavier AZERTY.',
      h_start: 'Écrit le layout dans le profil par défaut : s\'applique aux nouveaux comptes.',
      h_applocker: 'Les programmes ne se lancent plus depuis Téléchargements, Bureau ou Temp. Réversible dans gpedit.msc.',
      h_vbx: 'Nécessite l\'ISO des Guest Additions inséré au premier démarrage.',
      h_vmware: 'Nécessite l\'ISO VMware Tools inséré au premier démarrage.',
      h_virtio: 'Cherche virtio-win-guest-tools.exe sur les lecteurs (ISO virtio-win).',

      sm_hidden: 'Masquée', sm_icon: 'Icône seule', sm_box: 'Zone de recherche',
      d_uefi: 'UEFI / GPT — effacer le disque', d_mbr: 'BIOS / MBR — effacer le disque',
      d_none: 'Ne pas toucher (choix manuel)',

      warn_edition: 'Renseigne le nom exact de l\'édition (ex. « Windows 11 Pro »), sinon le setup s\'arrêtera.',
      warn_username: 'Aucun compte local : l\'assistant OOBE demandera d\'en créer un.',
      warn_password: 'Mot de passe vide : le compte sera créé sans mot de passe.',
      warn_computername: 'Nom invalide : 15 caractères max, sans espace ni caractère spécial.',
      warn_uac: 'UAC désactivé : à éviter sur une machine connectée à internet.',
      warn_wifi: 'Wi-Fi activé mais SSID vide : rien ne sera importé.',
      warn_users: 'Ligne de compte ignorée (nom vide ou invalide) : vérifie le format nom:motdepasse.'
    },

    en: {
      intro: 'Generate an <strong>autounattend.xml</strong> file for a hands-off Windows 10/11 install. Everything happens in your browser: nothing is uploaded, the file is built locally.',
      preview: 'autounattend.xml', clientside: '100% local',
      download: 'Download', copy: 'Copy', reset: 'Reset', copied: 'Copied!',
      optional: '(optional)',
      note: 'Put the file at the <strong>root</strong> of the USB stick (or of a second ISO for a VM). Setup reads it at boot: after any change, start the install again. Check the edition name with <code>dism /Get-WimInfo /WimFile:install.wim</code>.',
      footer: 'Static generator, no dependency, no server. Inspired by schneegans.de.',

      sec_sys: 'Target system', sec_loc: 'Language & region', sec_disk: 'Disk',
      sec_machine: 'Machine name', sec_account: 'Accounts', sec_oobe: 'OOBE assistant',
      sec_win11: 'Windows 11', sec_clean: 'Cleanup', sec_privacy: 'Privacy',
      sec_ui: 'Interface', sec_sysopt: 'System settings', sec_net: 'Wi-Fi network',
      sec_drv: 'Drivers & scripts',

      winver: 'Windows version', arch: 'Architecture', edition: 'Edition',
      productkey: 'Product key',
      locale: 'Install language', tz: 'Time zone',
      diskpart: 'Partitioning', disk: 'Disk number', winold: 'Delete Windows.old',
      computername: 'Computer name', username: 'User name', password: 'Password',
      autologon: 'Auto logon', pwnever: 'Password never expires',
      nolock: 'Disable session lock',
      skipoobe: 'Skip the OOBE assistant', bypassnet: 'Bypass the internet requirement',
      bypass: 'Bypass Windows 11 requirements',
      debloat: 'Remove preinstalled apps', onedrive: 'Uninstall OneDrive',
      appsugg: 'Disable app suggestions', widgets: 'Disable widgets',
      copilot: 'Disable Copilot', qol: 'Optimizations (Rufus bundle)',
      sanpolicy: 'Internal drives offline',
      bing: 'Disable Bing in search',
      keyboard: 'Keyboard layout', kb_auto: 'Same as the install language',
      wifi: 'Connect to Wi-Fi automatically', ssid: 'Network name (SSID)',
      wifipw: 'Wi-Fi password', wifihidden: 'Hidden network (SSID not broadcast)',
      users: 'Extra accounts (one per line)',
      deskIcons: 'This PC, Network and Recycle Bin on the desktop',
      visualfx: 'Visual effects: best performance',
      startBlank: 'Empty Start menu (no pinned tiles)',
      startNoRecs: 'Hide Start menu “Recommendations”',
      numlock: 'Turn Num Lock on at startup',
      mouseAccel: 'Disable mouse acceleration',
      edgeBoost: 'Disable Edge preloading',
      applocker: 'AppLocker: block running outside Program Files / Windows',
      vboxga: 'Install VirtualBox Guest Additions',
      vmwaretools: 'Install VMware Tools',
      virtio: 'Install VirtIO drivers (Proxmox, KVM, QEMU)',
      privacy: 'Reduce telemetry',
      showExt: 'Show file extensions', classicMenu: 'Classic context menu',
      launchThisPC: 'Open Explorer on This PC', darkMode: 'Dark theme',
      taskbarLeft: 'Taskbar on the left', hideTaskView: 'Hide Task View button',
      showEndTask: '“End task” in the taskbar',
      trayAll: 'Show all notification icons', searchMode: 'Taskbar search',
      longpaths: 'Paths longer than 260 characters', psscripts: 'Allow PowerShell scripts',
      rdp: 'Enable Remote Desktop', fastboot: 'Disable fast startup',
      sysrestore: 'Disable System Restore', smartscreen: 'Disable SmartScreen',
      uac: 'Disable UAC', deviceenc: 'Prevent automatic drive encryption',
      oemdrv: 'Install drivers from folder', drvpath: 'Driver folder on the stick',
      cmds: 'First-logon commands (one per line)',

      h_edition: 'Exact image name, in English', h_bypass: 'TPM 2.0, Secure Boot, RAM, CPU — VMs and unsupported hardware.',
      h_bypassnet: 'Hides the “no connection” OOBE screen.', h_debloat: 'Bing, Xbox, Teams, Clipchamp, Solitaire… at first logon.',
      h_uac: 'Not recommended: UAC stops protecting.', h_drvpath: 'Copy the .inf files to sources\\$OEM$\\$1\\Drivers',
      h_cmds: 'Run as admin after the first sign-in.', h_winold: 'Frees several GB after setup.',
      h_qol: 'Copilot, OneDrive, Outlook, Teams, ads, news, classic menu.',
      h_sanpolicy: 'SanPolicy=4 — for a system USB / Windows To Go.',
      h_wifi: 'A WPA2 profile is created and imported automatically during setup.',
      h_users: 'Format: name:password:Administrators — the 3rd field is optional (Users by default).',
      h_keyboard: 'Useful if you install in English with an AZERTY keyboard.',
      h_start: 'Writes the layout into the default profile: applies to new accounts.',
      h_applocker: 'Programs can no longer launch from Downloads, Desktop or Temp. Reversible in gpedit.msc.',
      h_vbx: 'Requires the Guest Additions ISO to be attached at first logon.',
      h_vmware: 'Requires the VMware Tools ISO to be attached at first logon.',
      h_virtio: 'Looks for virtio-win-guest-tools.exe on the drives (virtio-win ISO).',

      sm_hidden: 'Hidden', sm_icon: 'Icon only', sm_box: 'Search box',
      d_uefi: 'UEFI / GPT — wipe the disk', d_mbr: 'BIOS / MBR — wipe the disk',
      d_none: 'Leave untouched (pick manually)',

      warn_edition: 'Enter the exact edition name (e.g. “Windows 11 Pro”), otherwise setup will stop.',
      warn_username: 'No local account: the OOBE assistant will ask you to create one.',
      warn_password: 'Empty password: the account will have no password.',
      warn_computername: 'Invalid name: 15 characters max, no spaces or special characters.',
      warn_uac: 'UAC disabled: avoid on a machine connected to the internet.',
      warn_wifi: 'Wi-Fi enabled but SSID empty: nothing will be imported.',
      warn_users: 'Account line ignored (empty or invalid name): check the name:password format.'
    },

    de: {
      intro: 'Erzeugt eine <strong>autounattend.xml</strong> für eine unbeaufsichtigte Windows 10/11-Installation. Alles läuft im Browser: nichts wird hochgeladen, die Datei entsteht lokal.',
      preview: 'autounattend.xml', clientside: '100 % lokal',
      download: 'Herunterladen', copy: 'Kopieren', reset: 'Zurücksetzen', copied: 'Kopiert!',
      optional: '(optional)',
      note: 'Lege die Datei in das <strong>Wurzelverzeichnis</strong> des USB-Sticks (oder eines zweiten ISO für eine VM). Setup liest sie beim Start: nach Änderungen die Installation neu starten. Edition prüfen mit <code>dism /Get-WimInfo /WimFile:install.wim</code>.',
      footer: 'Statischer Generator, ohne Abhängigkeiten, ohne Server. Inspiriert von schneegans.de.',

      sec_sys: 'Zielsystem', sec_loc: 'Sprache & Region', sec_disk: 'Datenträger',
      sec_machine: 'Rechnername', sec_account: 'Konten', sec_oobe: 'OOBE-Assistent',
      sec_win11: 'Windows 11', sec_clean: 'Bereinigung', sec_privacy: 'Datenschutz',
      sec_ui: 'Oberfläche', sec_sysopt: 'Systemeinstellungen', sec_net: 'WLAN-Netzwerk',
      sec_drv: 'Treiber & Skripte',

      winver: 'Windows-Version', arch: 'Architektur', edition: 'Edition',
      productkey: 'Produktschlüssel',
      locale: 'Installationssprache', tz: 'Zeitzone',
      diskpart: 'Partitionierung', disk: 'Datenträgernummer', winold: 'Windows.old löschen',
      computername: 'Computername', username: 'Benutzername', password: 'Passwort',
      autologon: 'Automatische Anmeldung', pwnever: 'Passwort läuft nie ab',
      nolock: 'Sperrbildschirm deaktivieren',
      skipoobe: 'OOBE-Assistent überspringen', bypassnet: 'Internetpflicht umgehen',
      bypass: 'Windows 11-Anforderungen umgehen',
      debloat: 'Vorinstallierte Apps entfernen', onedrive: 'OneDrive deinstallieren',
      appsugg: 'App-Vorschläge deaktivieren', widgets: 'Widgets deaktivieren',
      copilot: 'Copilot deaktivieren', qol: 'Optimierungen (Rufus-Paket)',
      sanpolicy: 'Interne Datenträger offline',
      bing: 'Bing in der Suche deaktivieren',
      keyboard: 'Tastaturlayout', kb_auto: 'Wie die Installationssprache',
      wifi: 'Automatisch mit WLAN verbinden', ssid: 'Netzwerkname (SSID)',
      wifipw: 'WLAN-Passwort', wifihidden: 'Verborgenes Netzwerk (SSID nicht sichtbar)',
      users: 'Zusätzliche Konten (eines pro Zeile)',
      deskIcons: 'Dieser PC, Netzwerk und Papierkorb auf dem Desktop',
      visualfx: 'Visuelle Effekte: beste Leistung',
      startBlank: 'Leeres Startmenü (keine angehefteten Kacheln)',
      startNoRecs: '„Empfohlen“ im Startmenü ausblenden',
      numlock: 'Num-Taste beim Start aktivieren',
      mouseAccel: 'Mausbeschleunigung deaktivieren',
      edgeBoost: 'Edge-Vorladen deaktivieren',
      applocker: 'AppLocker: Ausführung außerhalb von Program Files / Windows blockieren',
      vboxga: 'VirtualBox Guest Additions installieren',
      vmwaretools: 'VMware Tools installieren',
      virtio: 'VirtIO-Treiber installieren (Proxmox, KVM, QEMU)',
      privacy: 'Telemetrie reduzieren',
      showExt: 'Dateiendungen anzeigen', classicMenu: 'Klassisches Kontextmenü',
      launchThisPC: 'Explorer auf „Dieser PC“ öffnen', darkMode: 'Dunkles Design',
      taskbarLeft: 'Taskleiste links', hideTaskView: 'Taskansicht ausblenden',
      showEndTask: '„Task beenden“ in der Taskleiste',
      trayAll: 'Alle Benachrichtigungssymbole zeigen', searchMode: 'Suche in der Taskleiste',
      longpaths: 'Pfade über 260 Zeichen', psscripts: 'PowerShell-Skripte erlauben',
      rdp: 'Remotedesktop aktivieren', fastboot: 'Schnellstart deaktivieren',
      sysrestore: 'Systemwiederherstellung deaktivieren', smartscreen: 'SmartScreen deaktivieren',
      uac: 'UAC deaktivieren', deviceenc: 'Automatische Laufwerksverschlüsselung verhindern',
      oemdrv: 'Treiber aus Ordner installieren', drvpath: 'Treiberordner auf dem Stick',
      cmds: 'Befehle bei erster Anmeldung (einer pro Zeile)',

      h_edition: 'Exakter Image-Name, auf Englisch', h_bypass: 'TPM 2.0, Secure Boot, RAM, CPU — VMs und fremde Hardware.',
      h_bypassnet: 'Blendet den OOBE-Bildschirm „keine Verbindung“ aus.', h_debloat: 'Bing, Xbox, Teams, Clipchamp, Solitaire… bei der ersten Anmeldung.',
      h_uac: 'Nicht empfohlen: UAC schützt dann nicht mehr.', h_drvpath: 'Kopiere die .inf nach sources\\$OEM$\\$1\\Drivers',
      h_cmds: 'Laufen als Admin nach der ersten Anmeldung.', h_winold: 'Gibt mehrere GB frei.',
      h_qol: 'Copilot, OneDrive, Outlook, Teams, Werbung, News, klassisches Menü.',
      h_sanpolicy: 'SanPolicy=4 — für einen System-Stick / Windows To Go.',
      h_wifi: 'Ein WPA2-Profil wird erstellt und während der Installation importiert.',
      h_users: 'Format: Name:Passwort:Administrators — das 3. Feld ist optional (Standard: Users).',
      h_keyboard: 'Nützlich bei englischer Installation mit AZERTY-Tastatur.',
      h_start: 'Schreibt das Layout ins Standardprofil: gilt für neue Konten.',
      h_applocker: 'Programme starten nicht mehr aus Downloads, Desktop oder Temp. Rückgängig über gpedit.msc.',
      h_vbx: 'Erfordert das Guest-Additions-ISO bei der ersten Anmeldung.',
      h_vmware: 'Erfordert das VMware-Tools-ISO bei der ersten Anmeldung.',
      h_virtio: 'Sucht virtio-win-guest-tools.exe auf den Laufwerken (virtio-win-ISO).',

      sm_hidden: 'Ausgeblendet', sm_icon: 'Nur Symbol', sm_box: 'Suchfeld',
      d_uefi: 'UEFI / GPT — Datenträger löschen', d_mbr: 'BIOS / MBR — Datenträger löschen',
      d_none: 'Unverändert lassen (manuell wählen)',

      warn_edition: 'Exakten Editionsnamen angeben (z. B. „Windows 11 Pro“), sonst bricht das Setup ab.',
      warn_username: 'Kein lokales Konto: der OOBE-Assistent verlangt eines.',
      warn_password: 'Leeres Passwort: das Konto wird ohne Passwort erstellt.',
      warn_computername: 'Ungültiger Name: max. 15 Zeichen, keine Leer- oder Sonderzeichen.',
      warn_uac: 'UAC deaktiviert: auf einem vernetzten Rechner nicht empfohlen.',
      warn_wifi: 'WLAN aktiviert, aber SSID leer: es wird nichts importiert.',
      warn_users: 'Kontozeile ignoriert (leerer oder ungültiger Name): Format Name:Passwort prüfen.'
    },

    es: {
      intro: 'Genera un archivo <strong>autounattend.xml</strong> para una instalación desatendida de Windows 10/11. Todo ocurre en tu navegador: no se envía nada, el archivo se crea localmente.',
      preview: 'autounattend.xml', clientside: '100 % local',
      download: 'Descargar', copy: 'Copiar', reset: 'Restablecer', copied: '¡Copiado!',
      optional: '(opcional)',
      note: 'Coloca el archivo en la <strong>raíz</strong> del USB (o de un segundo ISO para una VM). El setup lo lee al arrancar: tras modificarlo, reinicia la instalación. Comprueba el nombre de la edición con <code>dism /Get-WimInfo /WimFile:install.wim</code>.',
      footer: 'Generador estático, sin dependencias ni servidor. Inspirado en schneegans.de.',

      sec_sys: 'Sistema destino', sec_loc: 'Idioma y región', sec_disk: 'Disco',
      sec_machine: 'Nombre del equipo', sec_account: 'Cuentas', sec_oobe: 'Asistente OOBE',
      sec_win11: 'Windows 11', sec_clean: 'Limpieza', sec_privacy: 'Privacidad',
      sec_ui: 'Interfaz', sec_sysopt: 'Ajustes del sistema', sec_net: 'Red Wi-Fi',
      sec_drv: 'Controladores y scripts',

      winver: 'Versión de Windows', arch: 'Arquitectura', edition: 'Edición',
      productkey: 'Clave de producto',
      locale: 'Idioma de instalación', tz: 'Zona horaria',
      diskpart: 'Particionado', disk: 'Número de disco', winold: 'Eliminar Windows.old',
      computername: 'Nombre del equipo', username: 'Nombre de usuario', password: 'Contraseña',
      autologon: 'Inicio de sesión automático', pwnever: 'La contraseña no caduca',
      nolock: 'Desactivar el bloqueo de sesión',
      skipoobe: 'Saltar el asistente OOBE', bypassnet: 'Evitar el requisito de internet',
      bypass: 'Evitar requisitos de Windows 11',
      debloat: 'Quitar aplicaciones preinstaladas', onedrive: 'Desinstalar OneDrive',
      appsugg: 'Desactivar sugerencias de aplicaciones', widgets: 'Desactivar widgets',
      copilot: 'Desactivar Copilot', qol: 'Optimizaciones (paquete Rufus)',
      sanpolicy: 'Discos internos sin conexión',
      bing: 'Desactivar Bing en la búsqueda',
      keyboard: 'Distribución del teclado', kb_auto: 'Igual que el idioma de instalación',
      wifi: 'Conectar al Wi-Fi automáticamente', ssid: 'Nombre de la red (SSID)',
      wifipw: 'Contraseña del Wi-Fi', wifihidden: 'Red oculta (SSID no difundido)',
      users: 'Cuentas adicionales (una por línea)',
      deskIcons: 'Este equipo, Red y Papelera en el escritorio',
      visualfx: 'Efectos visuales: mejor rendimiento',
      startBlank: 'Menú Inicio vacío (sin iconos anclados)',
      startNoRecs: 'Ocultar «Recomendaciones» del menú Inicio',
      numlock: 'Activar Bloq Num al arrancar',
      mouseAccel: 'Desactivar la aceleración del ratón',
      edgeBoost: 'Desactivar la precarga de Edge',
      applocker: 'AppLocker: bloquear la ejecución fuera de Program Files / Windows',
      vboxga: 'Instalar VirtualBox Guest Additions',
      vmwaretools: 'Instalar VMware Tools',
      virtio: 'Instalar controladores VirtIO (Proxmox, KVM, QEMU)',
      privacy: 'Reducir la telemetría',
      showExt: 'Mostrar extensiones de archivo', classicMenu: 'Menú contextual clásico',
      launchThisPC: 'Abrir el Explorador en Este equipo', darkMode: 'Tema oscuro',
      taskbarLeft: 'Barra de tareas a la izquierda', hideTaskView: 'Ocultar Vista de tareas',
      showEndTask: '«Finalizar tarea» en la barra',
      trayAll: 'Mostrar todos los iconos de notificación', searchMode: 'Búsqueda en la barra de tareas',
      longpaths: 'Rutas de más de 260 caracteres', psscripts: 'Permitir scripts de PowerShell',
      rdp: 'Activar Escritorio remoto', fastboot: 'Desactivar el inicio rápido',
      sysrestore: 'Desactivar la restauración del sistema', smartscreen: 'Desactivar SmartScreen',
      uac: 'Desactivar UAC', deviceenc: 'Impedir el cifrado automático del disco',
      oemdrv: 'Instalar controladores de la carpeta', drvpath: 'Carpeta de controladores en el USB',
      cmds: 'Comandos al primer inicio (uno por línea)',

      h_edition: 'Nombre exacto de la imagen, en inglés', h_bypass: 'TPM 2.0, Secure Boot, RAM, CPU — VM y hardware no compatible.',
      h_bypassnet: 'Oculta la pantalla «sin conexión» del OOBE.', h_debloat: 'Bing, Xbox, Teams, Clipchamp, Solitaire… en el primer inicio.',
      h_uac: 'No recomendado: UAC deja de proteger.', h_drvpath: 'Copia los .inf en sources\\$OEM$\\$1\\Drivers',
      h_cmds: 'Se ejecutan como admin tras el primer inicio.', h_winold: 'Libera varios GB tras la instalación.',
      h_qol: 'Copilot, OneDrive, Outlook, Teams, anuncios, noticias, menú clásico.',
      h_sanpolicy: 'SanPolicy=4 — para un USB de sistema / Windows To Go.',
      h_wifi: 'Se crea e importa un perfil WPA2 automáticamente durante la instalación.',
      h_users: 'Formato: nombre:contraseña:Administrators — el 3er campo es opcional (Users por defecto).',
      h_keyboard: 'Útil si instalas en inglés con un teclado AZERTY.',
      h_start: 'Escribe el diseño en el perfil predeterminado: se aplica a las cuentas nuevas.',
      h_applocker: 'Los programas ya no se inician desde Descargas, Escritorio o Temp. Reversible en gpedit.msc.',
      h_vbx: 'Requiere el ISO de Guest Additions insertado en el primer inicio.',
      h_vmware: 'Requiere el ISO de VMware Tools insertado en el primer inicio.',
      h_virtio: 'Busca virtio-win-guest-tools.exe en las unidades (ISO virtio-win).',

      sm_hidden: 'Oculta', sm_icon: 'Solo icono', sm_box: 'Cuadro de búsqueda',
      d_uefi: 'UEFI / GPT — borrar el disco', d_mbr: 'BIOS / MBR — borrar el disco',
      d_none: 'No tocar (elegir a mano)',

      warn_edition: 'Indica el nombre exacto de la edición (p. ej. «Windows 11 Pro»), o el setup se detendrá.',
      warn_username: 'Sin cuenta local: el asistente OOBE pedirá crearla.',
      warn_password: 'Contraseña vacía: la cuenta se creará sin contraseña.',
      warn_computername: 'Nombre no válido: 15 caracteres máx., sin espacios ni símbolos.',
      warn_uac: 'UAC desactivado: evítalo en un equipo conectado a internet.',
      warn_wifi: 'Wi-Fi activado pero SSID vacío: no se importará nada.',
      warn_users: 'Línea de cuenta ignorada (nombre vacío o no válido): revisa el formato nombre:contraseña.'
    }
  };

  /* ------------------------------------------------------------- timezone */

  /* [windows id, utc offset, english cities, {fr,de,es} overrides] */
  var TZ = [
    ['Hawaiian Standard Time', '-10:00', 'Honolulu'],
    ['Alaskan Standard Time', '-09:00', 'Anchorage'],
    ['Pacific Standard Time', '-08:00', 'Los Angeles, Vancouver'],
    ['Mountain Standard Time', '-07:00', 'Denver, Calgary'],
    ['Central Standard Time', '-06:00', 'Chicago, Mexico City', { es: 'Chicago, Ciudad de México' }],
    ['Eastern Standard Time', '-05:00', 'New York, Toronto', { fr: 'New York, Toronto', es: 'Nueva York, Toronto' }],
    ['SA Pacific Standard Time', '-05:00', 'Bogotá, Lima'],
    ['Atlantic Standard Time', '-04:00', 'Halifax, San Juan'],
    ['E. South America Standard Time', '-03:00', 'São Paulo, Rio'],
    ['Argentina Standard Time', '-03:00', 'Buenos Aires, Montevideo'],
    ['UTC', '\u00b100:00', 'UTC'],
    ['GMT Standard Time', '\u00b100:00', 'London, Lisbon, Dublin', { fr: 'Londres, Lisbonne, Dublin', de: 'London, Lissabon, Dublin', es: 'Londres, Lisboa, Dublín' }],
    ['Romance Standard Time', '+01:00', 'Paris, Brussels, Madrid, Copenhagen', { fr: 'Paris, Bruxelles, Madrid, Copenhague', de: 'Paris, Brüssel, Madrid, Kopenhagen', es: 'París, Bruselas, Madrid, Copenhague' }],
    ['W. Europe Standard Time', '+01:00', 'Berlin, Amsterdam, Rome, Vienna', { fr: 'Berlin, Amsterdam, Rome, Vienne', de: 'Berlin, Amsterdam, Rom, Wien', es: 'Berlín, Ámsterdam, Roma, Viena' }],
    ['Central Europe Standard Time', '+01:00', 'Prague, Budapest, Belgrade', { fr: 'Prague, Budapest, Belgrade', de: 'Prag, Budapest, Belgrad', es: 'Praga, Budapest, Belgrado' }],
    ['Central European Standard Time', '+01:00', 'Warsaw, Zagreb, Sarajevo', { fr: 'Varsovie, Zagreb, Sarajevo', de: 'Warschau, Zagreb, Sarajevo', es: 'Varsovia, Zagreb, Sarajevo' }],
    ['GTB Standard Time', '+02:00', 'Athens, Bucharest, Sofia', { fr: 'Athènes, Bucarest, Sofia', de: 'Athen, Bukarest, Sofia', es: 'Atenas, Bucarest, Sofía' }],
    ['FLE Standard Time', '+02:00', 'Helsinki, Kyiv, Tallinn, Riga', { fr: 'Helsinki, Kyiv, Tallinn, Riga', de: 'Helsinki, Kiew, Tallinn, Riga', es: 'Helsinki, Kiev, Tallin, Riga' }],
    ['Israel Standard Time', '+02:00', 'Jerusalem', { fr: 'Jérusalem', de: 'Jerusalem', es: 'Jerusalén' }],
    ['Turkey Standard Time', '+03:00', 'Istanbul', { es: 'Estambul' }],
    ['Russian Standard Time', '+03:00', 'Moscow, Minsk', { fr: 'Moscou, Minsk', de: 'Moskau, Minsk', es: 'Moscú, Minsk' }],
    ['Arab Standard Time', '+03:00', 'Riyadh, Kuwait', { fr: 'Riyad, Koweït', de: 'Riad, Kuwait', es: 'Riad, Kuwait' }],
    ['Iran Standard Time', '+03:30', 'Tehran', { fr: 'Téhéran', de: 'Teheran', es: 'Teherán' }],
    ['Arabian Standard Time', '+04:00', 'Dubai, Muscat', { fr: 'Dubaï, Mascate', de: 'Dubai, Maskat', es: 'Dubái, Mascate' }],
    ['Pakistan Standard Time', '+05:00', 'Karachi, Islamabad'],
    ['India Standard Time', '+05:30', 'New Delhi, Mumbai', { fr: 'New Delhi, Bombay', de: 'Neu-Delhi, Mumbai', es: 'Nueva Delhi, Bombay' }],
    ['Bangladesh Standard Time', '+06:00', 'Dhaka'],
    ['SE Asia Standard Time', '+07:00', 'Bangkok, Jakarta, Hanoi'],
    ['China Standard Time', '+08:00', 'Beijing, Hong Kong', { fr: 'Pékin, Hong Kong', de: 'Peking, Hongkong', es: 'Pekín, Hong Kong' }],
    ['Singapore Standard Time', '+08:00', 'Singapore', { fr: 'Singapour', de: 'Singapur', es: 'Singapur' }],
    ['W. Australia Standard Time', '+08:00', 'Perth'],
    ['Tokyo Standard Time', '+09:00', 'Tokyo, Osaka'],
    ['Korea Standard Time', '+09:00', 'Seoul', { fr: 'Séoul', de: 'Seoul', es: 'Seúl' }],
    ['AUS Eastern Standard Time', '+10:00', 'Sydney, Melbourne', { es: 'Sídney, Melbourne' }],
    ['New Zealand Standard Time', '+12:00', 'Auckland']
  ];

  var LOCALES = [
    ['fr-FR', 'Romance Standard Time'], ['fr-CA', 'Eastern Standard Time'],
    ['en-US', 'Eastern Standard Time'], ['en-GB', 'GMT Standard Time'],
    ['de-DE', 'W. Europe Standard Time'], ['de-AT', 'W. Europe Standard Time'],
    ['de-CH', 'W. Europe Standard Time'], ['es-ES', 'Romance Standard Time'],
    ['es-MX', 'Central Standard Time'], ['it-IT', 'W. Europe Standard Time'],
    ['nl-NL', 'W. Europe Standard Time'], ['pt-PT', 'GMT Standard Time'],
    ['pt-BR', 'E. South America Standard Time'], ['pl-PL', 'Central European Standard Time'],
    ['cs-CZ', 'Central Europe Standard Time'], ['ro-RO', 'GTB Standard Time'],
    ['el-GR', 'GTB Standard Time'], ['sv-SE', 'W. Europe Standard Time'],
    ['nb-NO', 'W. Europe Standard Time'], ['da-DK', 'Romance Standard Time'],
    ['fi-FI', 'FLE Standard Time'], ['tr-TR', 'Turkey Standard Time'],
    ['ru-RU', 'Russian Standard Time'], ['uk-UA', 'FLE Standard Time'],
    ['ja-JP', 'Tokyo Standard Time'], ['ko-KR', 'Korea Standard Time'],
    ['zh-CN', 'China Standard Time'], ['zh-TW', 'China Standard Time'],
    ['ar-SA', 'Arab Standard Time'], ['he-IL', 'Israel Standard Time'],
    ['hi-IN', 'India Standard Time'], ['id-ID', 'SE Asia Standard Time']
  ];

  var EDITIONS = {
    11: ['Windows 11 Home', 'Windows 11 Home N', 'Windows 11 Home Single Language',
      'Windows 11 Education', 'Windows 11 Education N', 'Windows 11 Pro', 'Windows 11 Pro N',
      'Windows 11 Pro Education', 'Windows 11 Pro for Workstations', 'Windows 11 Enterprise',
      'Windows 11 Enterprise N', 'Windows 11 IoT Enterprise', 'Windows 11 SE'],
    10: ['Windows 10 Home', 'Windows 10 Home N', 'Windows 10 Home Single Language',
      'Windows 10 Education', 'Windows 10 Education N', 'Windows 10 Pro', 'Windows 10 Pro N',
      'Windows 10 Pro Education', 'Windows 10 Pro for Workstations', 'Windows 10 Enterprise',
      'Windows 10 Enterprise N', 'Windows 10 IoT Enterprise', 'Windows 10 S']
  };

  var DEBLOAT = [
    'Microsoft.549981C3F5F10', 'Microsoft.BingNews', 'Microsoft.BingWeather',
    'Microsoft.GetHelp', 'Microsoft.Getstarted', 'Microsoft.MicrosoftSolitaireCollection',
    'Microsoft.People', 'Microsoft.SkypeApp', 'Microsoft.WindowsFeedbackHub',
    'Microsoft.WindowsMaps', 'Microsoft.XboxApp', 'Microsoft.XboxGameOverlay',
    'Microsoft.XboxGamingOverlay', 'Microsoft.YourPhone', 'Microsoft.ZuneMusic',
    'Microsoft.ZuneVideo', 'MicrosoftTeams', 'Clipchamp.Clipchamp',
    'Microsoft.MicrosoftOfficeHub', 'Microsoft.Todos', 'Microsoft.PowerAutomateDesktop',
    'Microsoft.WindowsAlarms', 'Microsoft.MixedReality.Portal'
  ];

  /* --------------------------------------------------------------- schema */

  var HK = function (h, k, n, t, v) { return { h: h, k: k, n: n, t: t || 'REG_DWORD', v: v }; };

  var SCHEMA = [
    { id: 'sys', title: 'sec_sys', open: true, items: [
      { id: 'winver', type: 'select', label: 'winver', opts: [['11', 'Windows 11'], ['10', 'Windows 10']] },
      { id: 'arch', type: 'select', label: 'arch', opts: [['amd64', 'x64 (amd64)'], ['arm64', 'ARM64']] },
      { id: 'edition', type: 'edition', label: 'edition', hint: 'h_edition' },
      { id: 'productkey', type: 'text', label: 'productkey', hint: 'optional', ph: 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX' }
    ] },
    { id: 'loc', title: 'sec_loc', open: true, items: [
      { id: 'locale', type: 'locale', label: 'locale' },
      { id: 'tz', type: 'tz', label: 'tz' },
      { id: 'keyboard', type: 'select', label: 'keyboard', hint: 'h_keyboard', opts: [
        ['', 'kb_auto'],
        ['040c:0000040c', 'Français (AZERTY)'],
        ['080c:0000080c', 'Belgique (AZERTY)'],
        ['100c:0000100c', 'Suisse romande'],
        ['0c0c:00000c0c', 'Canada français'],
        ['0409:00000409', 'English (US)'],
        ['0809:00000809', 'English (UK)'],
        ['0407:00000407', 'Deutsch'],
        ['0807:00000807', 'Deutsch (Schweiz)'],
        ['0c07:00000c07', 'Deutsch (Österreich)'],
        ['0a0a:00000a0a', 'Español'],
        ['0410:00000410', 'Italiano'],
        ['0413:00000413', 'Nederlands'],
        ['0816:00000816', 'Português'],
        ['0416:00000416', 'Português (Brasil)'],
        ['0415:00000415', 'Polski'],
        ['0419:00000419', 'Русский'],
        ['041f:0000041f', 'Türkçe'],
        ['0411:00000411', '日本語'],
        ['0412:00000412', '한국어'],
        ['0804:00000804', '中文 (简体)']
      ] }
    ] },
    { id: 'disk', title: 'sec_disk', open: true, items: [
      { id: 'diskpart', type: 'select', label: 'diskpart', opts: [
        ['uefi', 'd_uefi'], ['mbr', 'd_mbr'], ['none', 'd_none']] },
      { id: 'disk', type: 'number', label: 'disk', def: '0', min: 0, max: 9 },
      { id: 'winold', type: 'bool', label: 'winold', hint: 'h_winold' }
    ] },
    { id: 'machine', title: 'sec_machine', open: true, items: [
      { id: 'computername', type: 'text', label: 'computername', ph: 'PC-01', max: 15 }
    ] },
    { id: 'account', title: 'sec_account', open: true, items: [
      { id: 'username', type: 'text', label: 'username', def: 'User' },
      { id: 'password', type: 'password', label: 'password', hint: 'optional' },
      { id: 'users', type: 'textarea', label: 'users', hint: 'h_users', ph: 'Alice:MotDePasse:Administrators' },
      { id: 'autologon', type: 'bool', label: 'autologon', def: true },
      { id: 'pwnever', type: 'bool', label: 'pwnever', def: true },
      { id: 'nolock', type: 'bool', label: 'nolock' }
    ] },
    { id: 'oobe', title: 'sec_oobe', open: true, items: [
      { id: 'skipoobe', type: 'bool', label: 'skipoobe', def: true },
      { id: 'bypassnet', type: 'bool', label: 'bypassnet', hint: 'h_bypassnet' }
    ] },
    { id: 'win11', title: 'sec_win11', open: true, items: [
      { id: 'bypass', type: 'bool', label: 'bypass', hint: 'h_bypass' }
    ] },
    { id: 'clean', title: 'sec_clean', items: [
      { id: 'debloat', type: 'bool', label: 'debloat', hint: 'h_debloat' },
      { id: 'qol', type: 'bool', label: 'qol', hint: 'h_qol' },
      { id: 'onedrive', type: 'bool', label: 'onedrive' },
      { id: 'appsugg', type: 'bool', label: 'appsugg' },
      { id: 'widgets', type: 'bool', label: 'widgets' },
      { id: 'copilot', type: 'bool', label: 'copilot' },
      { id: 'bing', type: 'bool', label: 'bing' }
    ] },
    { id: 'privacy', title: 'sec_privacy', items: [
      { id: 'privacy', type: 'bool', label: 'privacy' }
    ] },
    { id: 'ui', title: 'sec_ui', items: [
      { id: 'showExt', type: 'bool', label: 'showExt' },
      { id: 'classicMenu', type: 'bool', label: 'classicMenu' },
      { id: 'launchThisPC', type: 'bool', label: 'launchThisPC' },
      { id: 'darkMode', type: 'bool', label: 'darkMode' },
      { id: 'taskbarLeft', type: 'bool', label: 'taskbarLeft' },
      { id: 'hideTaskView', type: 'bool', label: 'hideTaskView' },
      { id: 'showEndTask', type: 'bool', label: 'showEndTask' },
      { id: 'trayAll', type: 'bool', label: 'trayAll' },
      { id: 'deskIcons', type: 'bool', label: 'deskIcons' },
      { id: 'visualfx', type: 'bool', label: 'visualfx' },
      { id: 'startBlank', type: 'bool', label: 'startBlank', hint: 'h_start' },
      { id: 'startNoRecs', type: 'bool', label: 'startNoRecs' },
      { id: 'searchMode', type: 'select', label: 'searchMode', opts: [
        ['2', 'sm_box'], ['1', 'sm_icon'], ['0', 'sm_hidden']] }
    ] },
    { id: 'net', title: 'sec_net', items: [
      { id: 'wifi', type: 'bool', label: 'wifi', hint: 'h_wifi' },
      { id: 'ssid', type: 'text', label: 'ssid', ph: 'MaBox-5G' },
      { id: 'wifipw', type: 'password', label: 'wifipw' },
      { id: 'wifihidden', type: 'bool', label: 'wifihidden' }
    ] },
    { id: 'sysopt', title: 'sec_sysopt', items: [
      { id: 'longpaths', type: 'bool', label: 'longpaths' },
      { id: 'psscripts', type: 'bool', label: 'psscripts' },
      { id: 'rdp', type: 'bool', label: 'rdp' },
      { id: 'fastboot', type: 'bool', label: 'fastboot' },
      { id: 'sysrestore', type: 'bool', label: 'sysrestore' },
      { id: 'smartscreen', type: 'bool', label: 'smartscreen' },
      { id: 'deviceenc', type: 'bool', label: 'deviceenc' },
      { id: 'sanpolicy', type: 'bool', label: 'sanpolicy', hint: 'h_sanpolicy' },
      { id: 'applocker', type: 'bool', label: 'applocker', hint: 'h_applocker' },
      { id: 'numlock', type: 'bool', label: 'numlock' },
      { id: 'mouseAccel', type: 'bool', label: 'mouseAccel' },
      { id: 'edgeBoost', type: 'bool', label: 'edgeBoost' },
      { id: 'uac', type: 'bool', label: 'uac', hint: 'h_uac', danger: true }
    ] },
    { id: 'drv', title: 'sec_drv', items: [
      { id: 'oemdrv', type: 'bool', label: 'oemdrv' },
      { id: 'drvpath', type: 'text', label: 'drvpath', hint: 'h_drvpath', def: 'C:\\Drivers' },
      { id: 'vboxga', type: 'bool', label: 'vboxga', hint: 'h_vbx' },
      { id: 'vmwaretools', type: 'bool', label: 'vmwaretools', hint: 'h_vmware' },
      { id: 'virtio', type: 'bool', label: 'virtio', hint: 'h_virtio' },
      { id: 'cmds', type: 'textarea', label: 'cmds', hint: 'h_cmds', ph: 'winget install --id Mozilla.Firefox -e' }
    ] }
  ];

  /* ------------------------------------------------------------- helpers */

  var $ = function (id) { return document.getElementById(id); };
  var pad = function (n) { return new Array(n + 1).join('  '); };
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escHtml(s) { return esc(s).replace(/'/g, '&#39;'); }
  function tr(key) {
    var t = I18N[document.documentElement.lang] || I18N.fr;
    return t[key] != null ? t[key] : (I18N.fr[key] != null ? I18N.fr[key] : key);
  }

  function tzLabel(z) {
    var lang = document.documentElement.lang || 'fr';
    var cities = (z[3] && z[3][lang]) || z[2];
    var off = z[1];
    return cities + ' \u2014 UTC' + off;
  }

  /* ------------------------------------------------------------ rendering */

  function itemHtml(it) {
    var lbl = '<label class="lbl" for="' + it.id + '"><span data-i18n="' + it.label + '"></span>' +
      (it.hint ? '<span class="hint" data-i18n="' + it.hint + '"></span>' : '') + '</label>';

    if (it.type === 'bool') {
      return '<label class="check' + (it.danger ? ' danger' : '') + '">' +
        '<input type="checkbox" id="' + it.id + '"' + (it.def ? ' checked' : '') + '>' +
        '<span class="cl"><span data-i18n="' + it.label + '"></span>' +
        (it.hint ? '<small data-i18n="' + it.hint + '"></small>' : '') + '</span></label>';
    }
    if (it.type === 'select') {
      var opts = it.opts.map(function (o) {
        var txt = o[1].indexOf('.') >= 0 || o[1].indexOf('_') >= 0 ? '' : o[1];
        return '<option value="' + escHtml(o[0]) + '"' + (txt ? '' : ' data-i18n="' + o[1] + '"') + '>' +
          escHtml(txt || tr(o[1])) + '</option>';
      }).join('');
      return '<div class="field">' + lbl + '<select id="' + it.id + '">' + opts + '</select></div>';
    }
    if (it.type === 'number') {
      return '<div class="field">' + lbl + '<input type="number" id="' + it.id + '" value="' +
        (it.def || '0') + '" min="' + (it.min != null ? it.min : 0) + '" max="' + (it.max != null ? it.max : 99) + '"></div>';
    }
    if (it.type === 'text' || it.type === 'password') {
      return '<div class="field">' + lbl + '<input type="' + it.type + '" id="' + it.id + '"' +
        (it.def ? ' value="' + escHtml(it.def) + '"' : '') +
        (it.ph ? ' placeholder="' + escHtml(it.ph) + '"' : '') +
        (it.max ? ' maxlength="' + it.max + '"' : '') +
        ' spellcheck="false" autocomplete="off"></div>';
    }
    if (it.type === 'textarea') {
      return '<div class="field">' + lbl + '<textarea id="' + it.id + '" rows="4" placeholder="' +
        escHtml(it.ph || '') + '"></textarea></div>';
    }
    if (it.type === 'edition') {
      return '<div class="field">' + lbl + '<input type="text" id="' + it.id + '" list="editionList" spellcheck="false" autocomplete="off">' +
        '<datalist id="editionList"></datalist></div>';
    }
    if (it.type === 'locale') {
      return '<div class="field">' + lbl + '<select id="' + it.id + '">' +
        LOCALES.map(function (l) {
          return '<option value="' + l[0] + '">' + l[0] + '</option>';
        }).join('') + '</select></div>';
    }
    if (it.type === 'tz') {
      return '<div class="field">' + lbl + '<select id="' + it.id + '"></select></div>';
    }
    return '<div class="field">' + lbl + '<input type="text" id="' + it.id + '"' +
      (it.def ? ' value="' + escHtml(it.def) + '"' : '') +
      (it.ph ? ' placeholder="' + escHtml(it.ph) + '"' : '') +
      (it.max ? ' maxlength="' + it.max + '"' : '') +
      ' spellcheck="false" autocomplete="off"></div>';
  }

  function renderForm() {
    $('sections').innerHTML = SCHEMA.map(function (sec, i) {
      return '<details class="card"' + (sec.open ? ' open' : '') + '>' +
        '<summary><span class="num">' + (i + 1) + '</span><span data-i18n="' + sec.title + '"></span>' +
        '<svg class="chev" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="9 18 15 12 9 6"/></svg></summary>' +
        '<div class="body">' + (sec.id === 'ui' || sec.id === 'sysopt' || sec.id === 'clean' || sec.id === 'privacy'
          ? '<div class="checks">' + sec.items.map(itemHtml).join('') + '</div>'
          : sec.items.map(itemHtml).join('')) +
        '</div></details>';
    }).join('');
  }

  function fillTz() {
    var sel = $('tz');
    if (!sel) return;
    sel.innerHTML = TZ.map(function (z) {
      return '<option value="' + z[0] + '">' + escHtml(tzLabel(z)) + '</option>';
    }).join('');
  }

  function fillEditions() {
    var v = $('winver').value;
    var list = EDITIONS[v] || EDITIONS[11];
    var dl = $('editionList');
    if (!dl) return;
    dl.innerHTML = list.map(function (e) { return '<option value="' + escHtml(e) + '"></option>'; }).join('');
    var cur = $('edition').value.trim();
    if (!cur || /^Windows (10|11) /.test(cur)) $('edition').value = list[5] || list[0];
  }

  function syncTz() {
    var l = LOCALES.filter(function (x) { return x[0] === $('locale').value; })[0];
    if (l) $('tz').value = l[1];
  }

  /* --------------------------------------------------------------- state */

  function readState() {
    var s = {};
    SCHEMA.forEach(function (sec) {
      sec.items.forEach(function (it) {
        var el = $(it.id);
        if (!el) return;
        s[it.id] = it.type === 'bool' ? el.checked : el.value;
      });
    });
    s.disk = parseInt(s.disk, 10) || 0;
    return s;
  }

  var  HKI = function (o) { return { h: o.h, k: o.k, n: o.n, t: o.t || 'REG_DWORD', v: o.v }; };

  var REG = {
    showExt: [HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'HideFileExt', 'REG_DWORD', 0)],
    classicMenu: [HK('HKCU', 'Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32', '', 'REG_SZ', '')],
    launchThisPC: [HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'LaunchTo', 'REG_DWORD', 1)],
    darkMode: [
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize', 'AppsUseLightTheme', 'REG_DWORD', 0),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize', 'SystemUsesLightTheme', 'REG_DWORD', 0)
    ],
    taskbarLeft: [HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'TaskbarAl', 'REG_DWORD', 0)],
    hideTaskView: [HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'ShowTaskViewButton', 'REG_DWORD', 0)],
    showEndTask: [HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\\TaskbarDeveloperSettings', 'TaskbarEndTask', 'REG_DWORD', 1)],
    trayAll: [HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer', 'EnableAutoTray', 'REG_DWORD', 0)],
    /* 0 = visible. NewStartPanel = Win10+, ClassicStartMenu = Win7-era shell. */
    deskIcons: (function () {
      var paths = ['Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\HideDesktopIcons\\NewStartPanel',
        'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\HideDesktopIcons\\ClassicStartMenu'];
      var clsid = ['{20D04FE0-3AEA-1069-A2D8-08002B30309D}',  /* This PC */
        '{F02C1A0D-BE21-4350-88B0-7367FC96EF3C}',               /* Network */
        '{645FF040-5081-101B-9F08-00AA002F954E}'];              /* Recycle Bin */
      var a = [];
      paths.forEach(function (p) { clsid.forEach(function (c) { a.push(HK('HKCU', p, c, 'REG_DWORD', 0)); }); });
      return a;
    })(),
    visualfx: [
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects', 'VisualFXSetting', 'REG_DWORD', 2)
    ],
    startNoRecs: [
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'Start_IrisRecommendations', 'REG_DWORD', 0),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'Start_TrackDocs', 'REG_DWORD', 0)
    ],
    numlock: [HK('HKCU', 'Control Panel\\Keyboard', 'InitialKeyboardIndicators', 'REG_SZ', '2')],
    mouseAccel: [
      HK('HKCU', 'Control Panel\\Mouse', 'MouseSpeed', 'REG_SZ', '0'),
      HK('HKCU', 'Control Panel\\Mouse', 'MouseThreshold1', 'REG_SZ', '0'),
      HK('HKCU', 'Control Panel\\Mouse', 'MouseThreshold2', 'REG_SZ', '0')
    ],
    edgeBoost: [
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Edge\\Recommended', 'BackgroundModeEnabled', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Edge\\Recommended', 'StartupBoostEnabled', 'REG_DWORD', 0)
    ],
    appsugg: [
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager', 'SystemPaneSuggestionsEnabled', 'REG_DWORD', 0),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager', 'SubscribedContent-338388Enabled', 'REG_DWORD', 0),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager', 'SubscribedContent-338389Enabled', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent', 'DisableWindowsConsumerFeatures', 'REG_DWORD', 1)
    ],
    widgets: [HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Dsh', 'AllowNewsAndInterests', 'REG_DWORD', 0)],
    bing: [HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\Explorer', 'DisableSearchBoxSuggestions', 'REG_DWORD', 1)],
    longpaths: [HK('HKLM', 'SYSTEM\\CurrentControlSet\\Control\\FileSystem', 'LongPathsEnabled', 'REG_DWORD', 1)],
    psscripts: [
      HK('HKLM', 'SOFTWARE\\Microsoft\\PowerShell\\1\\ShellIds\\Microsoft.PowerShell', 'ExecutionPolicy', 'REG_SZ', 'Unrestricted'),
      HK('HKLM', 'SOFTWARE\\WOW6432Node\\Microsoft\\PowerShell\\1\\ShellIds\\Microsoft.PowerShell', 'ExecutionPolicy', 'REG_SZ', 'Unrestricted')
    ],
    fastboot: [HK('HKLM', 'SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Power', 'HiberbootEnabled', 'REG_DWORD', 0)],
    sysrestore: [HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows NT\\SystemRestore', 'DisableSR', 'REG_DWORD', 1)],
    smartscreen: [
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\System', 'EnableSmartScreen', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\System', 'ShellSmartScreenLevel', 'REG_SZ', 'Warn')
    ],
    uac: [HK('HKLM', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System', 'EnableLUA', 'REG_DWORD', 0)],
    deviceenc: [HK('HKLM', 'SYSTEM\\CurrentControlSet\\Control\\BitLocker', 'PreventDeviceEncryption', 'REG_DWORD', 1)],
    nolock: [HK('HKLM', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System', 'InactivityTimeoutSecs', 'REG_DWORD', 0)],
    bypassnet: [HK('HKLM', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\OOBE', 'BypassNRO', 'REG_DWORD', 1)],
    privacy: [
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection', 'AllowTelemetry', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent', 'DisableWindowsConsumerFeatures', 'REG_DWORD', 1),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search', 'AllowCortana', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Dsh', 'AllowNewsAndInterests', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\AdvertisingInfo', 'DisabledByDefault', 'REG_DWORD', 1),
      HK('HKLM', 'SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting', 'Disabled', 'REG_DWORD', 1)
    ],
    rdp: [
      HK('HKLM', 'SYSTEM\\CurrentControlSet\\Control\\Terminal Server', 'fDenyTSConnections', 'REG_DWORD', 0)
    ],
    copilot: [
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsCopilot', 'TurnOffWindowsCopilot', 'REG_DWORD', 1),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'ShowCopilotButton', 'REG_DWORD', 0)
    ],
    /* Rufus "QoL" bundle: ads, news, Copilot, Teams, Outlook, Edge first run. */
    qol: [
      HK('HKLM', 'System\\CurrentControlSet\\Control\\Session Manager\\Power', 'HiberbootEnabled', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsCopilot', 'TurnOffWindowsCopilot', 'REG_DWORD', 1),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent', 'DisableWindowsConsumerFeatures', 'REG_DWORD', 1),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent', 'DisableCloudOptimizedContent', 'REG_DWORD', 1),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\Device Metadata', 'PreventDeviceMetadataFromNetwork', 'REG_DWORD', 1),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Dsh', 'AllowNewsAndInterests', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Feeds', 'EnableFeeds', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Communications', 'ConfigureChatAutoInstall', 'REG_DWORD', 0),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Edge', 'HideFirstRunExperience', 'REG_DWORD', 1),
      HK('HKLM', 'SOFTWARE\\Policies\\Microsoft\\Windows\\OneDrive', 'DisableFileSyncNGSC', 'REG_DWORD', 1),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'ShowCopilotButton', 'REG_DWORD', 0),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced', 'Start_Layout', 'REG_DWORD', 1),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager', 'SystemPaneSuggestionsEnabled', 'REG_DWORD', 0),
      HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Search', 'BingSearchEnabled', 'REG_DWORD', 0),
      HK('HKCU', 'Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32', '', 'REG_SZ', '')
    ],
    searchMode: function (v) {
      return [HK('HKCU', 'Software\\Microsoft\\Windows\\CurrentVersion\\Search', 'SearchboxTaskbarMode', 'REG_DWORD', v)];
    }
  };

  function regCmd(r, hive) {
    var h = r.h === 'HKCU' ? hive : 'HKLM';
    var cmd = 'reg add "' + h + '\\' + r.k + '"';
    if (r.n === '') cmd += ' /ve';
    else cmd += ' /v "' + r.n + '"';
    cmd += ' /t ' + r.t + ' /d "' + r.v + '" /f';
    return cmd;
  }

  /* --------------------------------------------------- powershell helpers */
  /* Quotes inside unattend CommandLine/Path are a minefield, so scripts are
     shipped base64-encoded (UTF-16LE), exactly like Task Scheduler does. */

  function b64utf16(s) {
    var bin = '';
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      bin += String.fromCharCode(c & 0xff, (c >>> 8) & 0xff);
    }
    return btoa(bin);
  }

  function psCmd(script) {
    return 'powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -EncodedCommand ' + b64utf16(PS_PRELUDE + script);
  }

  function psStr(s) { return "'" + String(s).replace(/'/g, "''") + "'"; }

  /* Single-quoted content is interpolated into "WriteFile": PS 5.1's
     Set-Content -Encoding UTF8 writes a BOM, which breaks netsh/AppLocker
     parsing. This writes plain UTF-8 without BOM. */
  var PS_PRELUDE = "function WriteFile($p,$c){$u=New-Object System.Text.UTF8Encoding($false);" +
    "[IO.File]::WriteAllText($p,$c,$u)};";

  /* WPA2-PSK profile, imported for all users. */
  function wifiScript(o) {
    var ssid = String(o.ssid || ''), pw = String(o.wifipw || '');
    var prof = '<?xml version="1.0" encoding="utf-8"?>' +
      '<WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">' +
      '<name>' + esc(ssid) + '</name><SSIDConfig><SSID><name>' + esc(ssid) + '</name>' +
      (o.wifihidden ? '<nonBroadcast>true</nonBroadcast>' : '') +
      '</SSID></SSIDConfig><connectionType>ESS</connectionType><connectionMode>auto</connectionMode>' +
      '<MSM><security><authEncryption><authentication>WPA2PSK</authentication>' +
      '<encryption>AES</encryption><useOneX>false</useOneX></authEncryption>' +
      '<sharedKey><keyType>passPhrase</keyType><protected>false</protected>' +
      '<keyMaterial>' + esc(pw) + '</keyMaterial></sharedKey></security></MSM></WLANProfile>';
    var f = 'C:\\Windows\\Temp\\wlan-profile.xml';
    return '$f=' + psStr(f) + ';' +
      'WriteFile $f ' + psStr(prof) + ';' +
      'netsh wlan add profile filename="$f" user=all | Out-Null;' +
      'netsh wlan set profileparameter name=' + psStr(ssid) + ' connectionmode=auto | Out-Null;';
  }

  /* Empty Start layout: no pinned tiles (Win10) and no pins on Win11 22H2+. */
  function startScript() {
    var xml = "<LayoutModificationTemplate Version='1' xmlns='http://schemas.microsoft.com/Start/2014/LayoutModification'>" +
      "<LayoutOptions StartTileGroupCellWidth='6' /><DefaultLayoutOverride><StartLayoutCollection>" +
      "<StartLayout GroupCellWidth='6' xmlns='http://schemas.microsoft.com/Start/2014/FullDefaultLayout' />" +
      "</StartLayoutCollection></DefaultLayoutOverride></LayoutModificationTemplate>";
    return '$d="$env:SystemDrive\\Users\\Default\\AppData\\Local\\Microsoft\\Windows\\Shell";' +
      'New-Item -ItemType Directory -Force -Path $d | Out-Null;' +
      'WriteFile "$d\\LayoutModification.xml" ' + psStr(xml) + ';' +
      'WriteFile "$d\\LayoutModification.json" ' + psStr('{"pinnedList":[]}') + ';';
  }

  /* Default AppLocker rules: only Program Files and Windows may execute. */
  function applockerScript() {
    var pol = '<AppLockerPolicy Version="1"><RuleCollection Type="Exe" EnforcementMode="Enabled">' +
      '<FilePathRule Id="921cc481-6e17-4653-8f75-050b80acca20" Name="Program Files" Description="" UserOrGroupSid="S-1-1-0" Action="Allow">' +
      '<Conditions><FilePathCondition Path="%PROGRAMFILES%\\*"/></Conditions></FilePathRule>' +
      '<FilePathRule Id="a9e18c21-ff8f-43cf-b9fc-db40eed693ba" Name="Windows" Description="" UserOrGroupSid="S-1-1-0" Action="Allow">' +
      '<Conditions><FilePathCondition Path="%WINDIR%\\*"/></Conditions></FilePathRule>' +
      '<FilePathRule Id="d5f5f1c9-1f4f-4c2b-9d3a-7b0e6a2c4f18" Name="Program Files (x86)" Description="" UserOrGroupSid="S-1-1-0" Action="Allow">' +
      '<Conditions><FilePathCondition Path="%PROGRAMFILES(X86)%\\*"/></Conditions></FilePathRule>' +
      '</RuleCollection></AppLockerPolicy>';
    var f = 'C:\\Windows\\Temp\\applocker.xml';
    return 'Set-Service AppIDSvc -StartupType Automatic -ErrorAction SilentlyContinue;' +
      'Start-Service AppIDSvc -ErrorAction SilentlyContinue;' +
      'WriteFile ' + psStr(f) + ' ' + psStr(pol) + ';' +
      'if (Get-Command Set-AppLockerPolicy -ErrorAction SilentlyContinue) { Set-AppLockerPolicy -XmlPolicy ' + psStr(f) + ' -Merge -ErrorAction SilentlyContinue };';
  }

  /* Look for an installer on every drive (the extra ISO/CD is mounted there). */
  function runFromDrives(names, args) {
    return 'Get-PSDrive -PSProvider FileSystem | ForEach-Object { ' +
      'foreach ($n in @(' + names.map(psStr).join(',') + ')) { ' +
      '$p = Join-Path $_.Root $n; ' +
      'if (Test-Path -LiteralPath $p) { Start-Process -FilePath $p -ArgumentList ' + psStr(args) + ' -Wait } } }';
  }

  /* ---------------------------------------------------------- xml builder */

  function component(name, arch, body, depth) {
    var i = pad(depth);
    var inner = body.replace(/^(?=.)/gm, '  ');
    return i + '<component name="' + name + '" processorArchitecture="' + arch +
      '" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS"\n' +
      i + '           xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State"\n' +
      i + '           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n' +
      inner + i + '</component>\n';
  }

  function uniq(a) {
    var seen = {}, out = [];
    a.forEach(function (x) { if (!seen[x]) { seen[x] = 1; out.push(x); } });
    return out;
  }

  /* "name:password:Administrators" per line — group is optional. */
  function parseUsers(txt) {
    var out = [];
    String(txt || '').split('\n').forEach(function (line) {
      line = line.trim();
      if (!line) return;
      var p = line.split(':');
      var name = (p[0] || '').trim().replace(/[^A-Za-z0-9._-]/g, '');
      if (!name) return;
      var g = (p[2] || '').trim().toLowerCase();
      out.push({
        name: name,
        pw: p.length > 1 ? p[1] : '',
        group: g === 'administrators' || g === 'admin' ? 'Administrators' : 'Users'
      });
    });
    return out;
  }

  function cmdBlock(tag, cmds, depth) {
    var b = '';
    cmds.forEach(function (c, i) {
      b += pad(depth) + '<' + tag + ' wcm:action="add">\n';
      b += pad(depth + 1) + '<Order>' + (i + 1) + '</Order>\n';
      if (tag === 'SynchronousCommand') {
        b += pad(depth + 1) + '<CommandLine>' + esc(c) + '</CommandLine>\n';
        b += pad(depth + 1) + '<RequiresUserInput>false</RequiresUserInput>\n';
      } else {
        b += pad(depth + 1) + '<Path>' + esc(c) + '</Path>\n';
      }
      b += pad(depth) + '</' + tag + '>\n';
    });
    return b;
  }

  function buildXml(o) {
    var arch = o.arch, loc = o.locale, out = '';
    var kb = o.keyboard || loc;

    /* ---------------- windowsPE ---------------- */
    var pe = pad(4) + '<SetupUILanguage>\n' + pad(5) + '<UILanguage>' + esc(loc) + '</UILanguage>\n' + pad(4) + '</SetupUILanguage>\n';
    pe += pad(4) + '<InputLocale>' + esc(kb) + '</InputLocale>\n';
    pe += pad(4) + '<SystemLocale>' + esc(loc) + '</SystemLocale>\n';
    pe += pad(4) + '<UILanguage>' + esc(loc) + '</UILanguage>\n';
    pe += pad(4) + '<UserLocale>' + esc(loc) + '</UserLocale>\n';

    var setup = '';
    if (o.diskpart !== 'none') {
      var uefi = o.diskpart === 'uefi';
      setup += pad(4) + '<DiskConfiguration>\n' + pad(5) + '<Disk wcm:action="add">\n';
      setup += pad(6) + '<DiskID>' + o.disk + '</DiskID>\n';
      setup += pad(6) + '<WillWipeDisk>true</WillWipeDisk>\n';
      setup += pad(6) + '<CreatePartitions>\n';
      if (uefi) {
        setup += pad(7) + '<CreatePartition wcm:action="add"><Order>1</Order><Type>EFI</Type><Size>100</Size></CreatePartition>\n';
        setup += pad(7) + '<CreatePartition wcm:action="add"><Order>2</Order><Type>MSR</Type><Size>16</Size></CreatePartition>\n';
      } else {
        setup += pad(7) + '<CreatePartition wcm:action="add"><Order>1</Order><Type>Primary</Type><Size>500</Size></CreatePartition>\n';
      }
      setup += pad(7) + '<CreatePartition wcm:action="add"><Order>' + (uefi ? 3 : 2) +
        '</Order><Type>Primary</Type><Extend>true</Extend></CreatePartition>\n';
      setup += pad(6) + '</CreatePartitions>\n' + pad(6) + '<ModifyPartitions>\n';
      setup += pad(7) + '<ModifyPartition wcm:action="add">\n' + pad(8) + '<Order>1</Order><PartitionID>1</PartitionID>' +
        (uefi ? '<Format>FAT32</Format><Label>System</Label>' : '<Active>true</Active><Format>NTFS</Format><Label>System Reserved</Label>') +
        '\n' + pad(7) + '</ModifyPartition>\n';
      setup += pad(7) + '<ModifyPartition wcm:action="add">\n' + pad(8) + '<Order>2</Order><PartitionID>' + (uefi ? 3 : 2) +
        '</PartitionID><Format>NTFS</Format><Label>Windows</Label><Letter>C</Letter>\n' + pad(7) + '</ModifyPartition>\n';
      setup += pad(6) + '</ModifyPartitions>\n' + pad(5) + '</Disk>\n' + pad(5) + '<WillShowUI>OnError</WillShowUI>\n';
      if (o.deviceenc) setup += pad(5) + '<DisableEncryptedDiskProvisioning>true</DisableEncryptedDiskProvisioning>\n';
      setup += pad(4) + '</DiskConfiguration>\n';
    }

    setup += pad(4) + '<ImageInstall>\n' + pad(5) + '<OSImage>\n' + pad(6) + '<InstallFrom>\n' + pad(7) + '<MetaData wcm:action="add">\n';
    setup += pad(8) + '<Key>/IMAGE/NAME</Key>\n' + pad(8) + '<Value>' + esc(o.edition) + '</Value>\n';
    setup += pad(7) + '</MetaData>\n' + pad(6) + '</InstallFrom>\n';
    if (o.diskpart !== 'none') {
      setup += pad(6) + '<InstallTo>\n' + pad(7) + '<DiskID>' + o.disk + '</DiskID>\n' +
        pad(7) + '<PartitionID>' + (o.diskpart === 'uefi' ? 3 : 2) + '</PartitionID>\n' + pad(6) + '</InstallTo>\n';
    }
    setup += pad(6) + '<WillShowUI>OnError</WillShowUI>\n' + pad(5) + '</OSImage>\n' + pad(4) + '</ImageInstall>\n';

    if (o.bypass) {
      var bp = ['BypassTPMCheck', 'BypassSecureBootCheck', 'BypassRAMCheck', 'BypassCPUCheck', 'BypassStorageCheck'];
      setup += pad(4) + '<RunSynchronous>\n';
      bp.forEach(function (v, i) {
        setup += pad(5) + '<RunSynchronousCommand wcm:action="add">\n' + pad(6) + '<Order>' + (i + 1) + '</Order>\n' +
          pad(6) + '<Path>reg add HKLM\\SYSTEM\\Setup\\LabConfig /v ' + v + ' /t REG_DWORD /d 1 /f</Path>\n' +
          pad(5) + '</RunSynchronousCommand>\n';
      });
      setup += pad(4) + '</RunSynchronous>\n';
    }

    setup += pad(4) + '<UserData>\n' + pad(5) + '<AcceptEula>true</AcceptEula>\n';
    if (o.productkey) {
      setup += pad(5) + '<ProductKey>\n' + pad(6) + '<Key>' + esc(o.productkey) + '</Key>\n' +
        pad(6) + '<WillShowUI>OnError</WillShowUI>\n' + pad(5) + '</ProductKey>\n';
    }
    setup += pad(4) + '</UserData>\n';

    out += pad(2) + '<settings pass="windowsPE">\n' +
      component('Microsoft-Windows-International-Core-WinPE', arch, pe, 4) +
      component('Microsoft-Windows-Setup', arch, setup, 4) +
      pad(2) + '</settings>\n';

    if (o.sanpolicy) {
      out += pad(2) + '<settings pass="offlineServicing">\n' +
        component('Microsoft-Windows-PartitionManager', arch, pad(4) + '<SanPolicy>4</SanPolicy>\n', 4) +
        pad(2) + '</settings>\n';
    }

    /* ---------------- specialize ---------------- */
    var sp = '';
    if (o.computername) sp += pad(4) + '<ComputerName>' + esc(o.computername) + '</ComputerName>\n';
    sp += pad(4) + '<TimeZone>' + esc(o.tz) + '</TimeZone>\n';
    out += pad(2) + '<settings pass="specialize">\n' + component('Microsoft-Windows-Shell-Setup', arch, sp, 4);

    var cmds = [];
    if (o.oemdrv && o.drvpath) {
      cmds.push('pnputil /add-driver "' + o.drvpath + '\\*.inf" /subdirs /install');
    }
    ['bypassnet', 'privacy', 'rdp', 'longpaths', 'psscripts', 'fastboot', 'sysrestore',
      'smartscreen', 'uac', 'nolock', 'qol', 'copilot', 'edgeBoost'].forEach(function (k) {
      if (!o[k]) return;
      (REG[k] || []).forEach(function (r) { if (r.h === 'HKLM') cmds.push(regCmd(r, null)); });
    });
    if (o.searchMode != null && $('searchMode')) { /* handled below with HKLM */ }

    if (o.wifi && o.ssid) cmds.push(psCmd(wifiScript(o)));
    if (o.startBlank) cmds.push(psCmd(startScript()));

    var hkcu = [];
    ['showExt', 'classicMenu', 'launchThisPC', 'darkMode', 'taskbarLeft', 'hideTaskView',
      'showEndTask', 'trayAll', 'deskIcons', 'visualfx', 'startNoRecs', 'numlock',
      'mouseAccel', 'appsugg', 'qol', 'copilot'].forEach(function (k) {
      if (!o[k]) return;
      (REG[k] || []).forEach(function (r) { if (r.h === 'HKCU') hkcu.push(regCmd(r, 'HKU\\MU')); });
    });
    if (o.searchMode != null && $('searchMode')) {
      REG.searchMode(o.searchMode).forEach(function (r) { hkcu.push(regCmd(r, 'HKU\\MU')); });
    }
    if (hkcu.length) {
      cmds.push('reg load "HKU\\MU" "C:\\Users\\Default\\NTUSER.DAT"');
      hkcu.forEach(function (c) { cmds.push(c); });
      cmds.push('reg unload "HKU\\MU"');
    }
    if (o.numlock) {
      cmds.push('reg add "HKU\\.DEFAULT\\Control Panel\\Keyboard" /v InitialKeyboardIndicators /t REG_SZ /d 2 /f');
    }

    cmds = uniq(cmds);
    if (cmds.length) {
      out += component('Microsoft-Windows-Deployment', arch,
        pad(4) + '<RunSynchronous>\n' + cmdBlock('RunSynchronousCommand', cmds, 5) + pad(4) + '</RunSynchronous>\n', 4);
    }
    out += pad(2) + '</settings>\n';

    /* ---------------- oobeSystem ---------------- */
    var ic = pad(4) + '<InputLocale>' + esc(kb) + '</InputLocale>\n' +
      pad(4) + '<SystemLocale>' + esc(loc) + '</SystemLocale>\n' +
      pad(4) + '<UILanguage>' + esc(loc) + '</UILanguage>\n' +
      pad(4) + '<UserLocale>' + esc(loc) + '</UserLocale>\n';

    var sh = pad(4) + '<OOBE>\n';
    if (o.skipoobe) {
      sh += pad(5) + '<HideEULAPage>true</HideEULAPage>\n' +
        pad(5) + '<HideOnlineAccountScreens>true</HideOnlineAccountScreens>\n' +
        pad(5) + '<HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>\n';
    }
    sh += pad(5) + '<ProtectYourPC>3</ProtectYourPC>\n' + pad(4) + '</OOBE>\n';

    var accounts = [];
    if (o.username) accounts.push({ name: o.username, pw: o.password, group: 'Administrators' });
    parseUsers(o.users).forEach(function (u) {
      var dup = accounts.some(function (a) { return a.name.toLowerCase() === u.name.toLowerCase(); });
      if (!dup) accounts.push(u);
    });

    if (accounts.length) {
      sh += pad(4) + '<UserAccounts>\n' + pad(5) + '<LocalAccounts>\n';
      accounts.forEach(function (a) {
        sh += pad(6) + '<LocalAccount wcm:action="add">\n';
        sh += pad(7) + '<Name>' + esc(a.name) + '</Name>\n' + pad(7) + '<DisplayName>' + esc(a.name) + '</DisplayName>\n' +
          pad(7) + '<Group>' + esc(a.group) + '</Group>\n' + pad(7) + '<Password>\n' +
          pad(8) + '<Value>' + esc(a.pw) + '</Value>\n' + pad(8) + '<PlainText>true</PlainText>\n' +
          pad(7) + '</Password>\n' + pad(6) + '</LocalAccount>\n';
      });
      sh += pad(5) + '</LocalAccounts>\n' + pad(4) + '</UserAccounts>\n';
      if (o.autologon && o.username) {
        sh += pad(4) + '<AutoLogon>\n' + pad(5) + '<Enabled>true</Enabled>\n' +
          pad(5) + '<Username>' + esc(o.username) + '</Username>\n' + pad(5) + '<Password>\n' +
          pad(6) + '<Value>' + esc(o.password) + '</Value>\n' + pad(6) + '<PlainText>true</PlainText>\n' +
          pad(5) + '</Password>\n' + pad(5) + '<LogonCount>1</LogonCount>\n' + pad(4) + '</AutoLogon>\n';
      }
    }

    var first = [];
    if (o.debloat) {
      var ps = "$apps=" + DEBLOAT.map(function (a) { return "'" + a + "'"; }).join(',') + ';' +
        'foreach($a in $apps){Get-AppxPackage -AllUsers $a | Remove-AppxPackage -AllUsers -ErrorAction SilentlyContinue;' +
        'Get-AppxProvisionedPackage -Online | Where-Object {$_.DisplayName -eq $a} | Remove-AppxProvisionedPackage -Online -ErrorAction SilentlyContinue}';
      first.push('powershell -NoProfile -ExecutionPolicy Bypass -Command "' + ps + '"');
    }
    if (o.onedrive) first.push('cmd /c if exist "%SystemRoot%\\SysWOW64\\OneDriveSetup.exe" start /wait %SystemRoot%\\SysWOW64\\OneDriveSetup.exe /uninstall');
    if (o.qol) {
      first.push('powershell -NoProfile -ExecutionPolicy Bypass -Command "Remove-Item -Path $env:SystemRoot\\System32\\OneDriveSetup.exe -Force -ErrorAction SilentlyContinue; Remove-Item -Path $env:SystemRoot\\SysWOW64\\OneDriveSetup.exe -Force -ErrorAction SilentlyContinue"');
      first.push('powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-AppxProvisionedPackage -Online | Where-Object {$_.PackageName -like \'*Outlook*\'} | Remove-AppxProvisionedPackage -Online"');
      first.push('powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-AppxPackage -AllUsers *Outlook* | Remove-AppxPackage -AllUsers -ErrorAction SilentlyContinue"');
      first.push('powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-AppxProvisionedPackage -Online | Where-Object {$_.PackageName -like \'*Teams*\'} | Remove-AppxProvisionedPackage -Online"');
      first.push('powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-AppxPackage -AllUsers *Teams* | Remove-AppxPackage -AllUsers -ErrorAction SilentlyContinue"');
    }
    if (o.winold) first.push('cmd /c rd /s /q C:\\Windows.old');
    if (o.pwnever) first.push('cmd /c net accounts /maxpwage:unlimited');
    if (o.applocker) first.push(psCmd(applockerScript()));
    if (o.vboxga) first.push(psCmd(runFromDrives(['VBoxWindowsAdditions.exe'], '/S')));
    if (o.vmwaretools) first.push(psCmd(runFromDrives(['setup64.exe', 'setup.exe'], '/S /v "/qn REBOOT=ReallySuppress"')));
    if (o.virtio) first.push(psCmd(runFromDrives(['virtio-win-guest-tools.exe'], '/S')));
    (o.cmds || '').split('\n').forEach(function (line) {
      line = line.trim();
      if (line) first.push('cmd /c ' + line);
    });
    first = uniq(first);
    if (first.length) sh += pad(4) + '<FirstLogonCommands>\n' + cmdBlock('SynchronousCommand', first, 5) + pad(4) + '</FirstLogonCommands>\n';

    out += pad(2) + '<settings pass="oobeSystem">\n' +
      component('Microsoft-Windows-International-Core', arch, ic, 4) +
      component('Microsoft-Windows-Shell-Setup', arch, sh, 4) +
      (o.deviceenc
        ? component('Microsoft-Windows-SecureStartup-FilterDriver', arch,
            pad(4) + '<PreventDeviceEncryption>true</PreventDeviceEncryption>\n', 4) +
          component('Microsoft-Windows-EnhancedStorage-Adm', arch,
            pad(4) + '<TCGSecurityActivationDisabled>1</TCGSecurityActivationDisabled>\n', 4)
        : '') +
      pad(2) + '</settings>\n';

    return '<?xml version="1.0" encoding="utf-8"?>\n' +
      '<!-- Generated with meumeu.dev/unattend -->\n' +
      '<unattend xmlns="urn:schemas-microsoft-com:unattend">\n' + out + '</unattend>\n';
  }

  /* ------------------------------------------------------ syntax coloring */

  function highlight(xml) {
    var h = escHtml(xml);
    h = h.replace(/&lt;!--[\s\S]*?--&gt;/g, function (m) { return '<span class="c">' + m + '</span>'; });
    h = h.replace(/(&lt;\/?)([A-Za-z_][\w.:-]*)/g, '$1<span class="t">$2</span>');
    h = h.replace(/([A-Za-z_][\w.:-]*)=(&quot;.*?&quot;)/g, '<span class="a">$1</span>=<span class="v">$2</span>');
    return h;
  }

  /* ------------------------------------------------------------- actions */

  var currentXml = '';

  function render() {
    var o = readState();
    currentXml = buildXml(o);
    $('out').innerHTML = highlight(currentXml);

    var warns = [];
    if (!o.edition) warns.push(tr('warn_edition'));
    if (!o.username) warns.push(tr('warn_username'));
    if (!o.password && o.username) warns.push(tr('warn_password'));
    if (o.computername && !/^[A-Za-z0-9-]{1,15}$/.test(o.computername)) warns.push(tr('warn_computername'));
    if (o.uac) warns.push(tr('warn_uac'));
    if (o.wifi && !o.ssid) warns.push(tr('warn_wifi'));
    if (parseUsers(o.users).length < String(o.users || '').split('\n').filter(function (l) { return l.trim(); }).length) warns.push(tr('warn_users'));

    var w = $('warn');
    if (warns.length) { w.innerHTML = warns.map(escHtml).join('<br>'); w.classList.add('show'); }
    else { w.innerHTML = ''; w.classList.remove('show'); }
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'fr';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (tr(k) != null) el.textContent = tr(k);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = tr(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('.langbar button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    var tzv = $('tz') && $('tz').value;
    fillTz();
    if (tzv) $('tz').value = tzv;
    try { localStorage.setItem('unattend-lang', lang); } catch (e) { }
    render();
  }

  function download() {
    var blob = new Blob([currentXml], { type: 'application/xml;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'autounattend.xml';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  function copy() {
    var b = $('copy');
    var done = function () {
      var old = b.textContent;
      b.textContent = tr('copied');
      setTimeout(function () { b.textContent = old; }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(currentXml).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = currentXml;
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { }
      ta.remove();
    }
  }

  function reset() {
    SCHEMA.forEach(function (sec) {
      sec.items.forEach(function (it) {
        var el = $(it.id);
        if (!el) return;
        if (it.type === 'bool') el.checked = !!it.def;
        else if (it.type === 'select') el.selectedIndex = 0;
        else if (it.type === 'number') el.value = it.def || '0';
        else el.value = it.def || '';
      });
    });
    $('locale').value = 'fr-FR';
    syncTz();
    fillEditions();
    render();
  }

  var timer = null;
  function debounced() { clearTimeout(timer); timer = setTimeout(render, 90); }

  function init() {
    renderForm();

    var lang = 'fr';
    try { lang = localStorage.getItem('unattend-lang') || lang; } catch (e) { }
    if (!I18N[lang]) lang = 'fr';

    var nav = (navigator.language || 'fr-FR').replace('_', '-');
    var match = LOCALES.filter(function (l) { return l[0] === nav; })[0] ||
      LOCALES.filter(function (l) { return l[0].split('-')[0] === nav.split('-')[0]; })[0] || LOCALES[0];
    $('locale').value = match[0];

    fillTz();
    syncTz();
    fillEditions();

    document.querySelectorAll('.langbar button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
    });
    document.querySelectorAll('#sections input, #sections select, #sections textarea').forEach(function (el) {
      el.addEventListener('input', debounced);
      el.addEventListener('change', function () {
        if (el.id === 'winver') fillEditions();
        if (el.id === 'locale') syncTz();
        render();
      });
    });
    $('dl').addEventListener('click', download);
    $('copy').addEventListener('click', copy);
    $('reset').addEventListener('click', reset);

    applyLang(lang);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
