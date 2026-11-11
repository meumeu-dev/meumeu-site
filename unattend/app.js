/* unattend — autounattend.xml generator (meumeu.dev)
   Static, no dependency, no network. Everything is generated client-side. */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- i18n */

  var I18N = {
    fr: {
      intro: 'Génère un fichier <strong>autounattend.xml</strong> pour une installation Windows 10/11 sans intervention. Tout se passe dans ton navigateur : aucune donnée n\'est envoyée, le fichier est construit localement.',
      s1: 'Système cible', winver: 'Version', arch: 'Architecture',
      edition: 'Édition (nom exact de l\'image)', productkey: 'Clé produit', optional: '(facultatif)',
      s2: 'Langue & région', locale: 'Langue d\'installation', tz: 'Fuseau horaire',
      s3: 'Disque', diskpart: 'Partitionnement',
      disk_uefi: 'UEFI / GPT — effacer le disque',
      disk_mbr: 'BIOS / MBR — effacer le disque',
      disk_none: 'Ne pas toucher (choix manuel)',
      diskn: 'Numéro de disque',
      s4: 'Machine & compte', computername: 'Nom de l\'ordinateur', username: 'Nom d\'utilisateur',
      password: 'Mot de passe',
      autologon: 'Connexion automatique', autologon_h: 'Ouvre directement la session après l\'installation.',
      s5: 'Options',
      skipoobe: 'Passer l\'assistant OOBE', skipoobe_h: 'Masque la confidentialité, le Wi-Fi et le compte Microsoft.',
      bypass: 'Contourner les prérequis Windows 11', bypass_h: 'TPM 2.0, Secure Boot, RAM, CPU — VM et matériel non supporté.',
      debloat: 'Supprimer les applications préinstallées', debloat_h: 'Bing, Xbox, Teams, Clipchamp, Solitaire… au premier démarrage.',
      privacy: 'Réduire la télémétrie', privacy_h: 'Télémétrie, ID de publicité, Cortana, widgets, suggestions.',
      rdp: 'Activer le Bureau à distance', rdp_h: 'RDP + règle de pare-feu. À n\'activer que sur un réseau de confiance.',
      preview: 'autounattend.xml', clientside: '100 % local',
      download: 'Télécharger', copy: 'Copier', reset: 'Réinitialiser',
      note: 'Place le fichier à la <strong>racine</strong> de la clé USB (ou d\'un second ISO pour une VM). Le setup le lit au démarrage : après modification, relance l\'installation. Vérifie le nom d\'édition avec <code>dism /Get-WimInfo /WimFile:install.wim</code>.',
      footer: 'Générateur statique, sans dépendance, sans serveur. Inspiré de schneegans.de.',
      warn_edition: 'Renseigne le nom exact de l\'édition (ex. « Windows 11 Pro »), sinon le setup s\'arrêtera.',
      warn_username: 'Aucun compte local : l\'assistant OOBE demandera d\'en créer un.',
      warn_password: 'Mot de passe vide : le compte sera créé sans mot de passe.',
      warn_computername: 'Nom d\'ordinateur invalide : 15 caractères max, sans espace ni caractère spécial.',
      warn_win11_no_bypass: 'Windows 11 exige TPM 2.0 et Secure Boot. Coche « Contourner » pour une VM ou du matériel non supporté.',
      copied: 'Copié !'
    },
    en: {
      intro: 'Generate an <strong>autounattend.xml</strong> file for a hands-off Windows 10/11 install. Everything happens in your browser: nothing is uploaded, the file is built locally.',
      s1: 'Target system', winver: 'Version', arch: 'Architecture',
      edition: 'Edition (exact image name)', productkey: 'Product key', optional: '(optional)',
      s2: 'Language & region', locale: 'Install language', tz: 'Time zone',
      s3: 'Disk', diskpart: 'Partitioning',
      disk_uefi: 'UEFI / GPT — wipe the disk',
      disk_mbr: 'BIOS / MBR — wipe the disk',
      disk_none: 'Leave untouched (pick manually)',
      diskn: 'Disk number',
      s4: 'Machine & account', computername: 'Computer name', username: 'User name',
      password: 'Password',
      autologon: 'Auto logon', autologon_h: 'Signs in automatically right after setup.',
      s5: 'Options',
      skipoobe: 'Skip the OOBE assistant', skipoobe_h: 'Hides privacy, Wi-Fi and Microsoft account screens.',
      bypass: 'Bypass Windows 11 requirements', bypass_h: 'TPM 2.0, Secure Boot, RAM, CPU — VMs and unsupported hardware.',
      debloat: 'Remove preinstalled apps', debloat_h: 'Bing, Xbox, Teams, Clipchamp, Solitaire… at first logon.',
      privacy: 'Reduce telemetry', privacy_h: 'Telemetry, advertising ID, Cortana, widgets, suggestions.',
      rdp: 'Enable Remote Desktop', rdp_h: 'RDP + firewall rule. Only on a trusted network.',
      preview: 'autounattend.xml', clientside: '100% local',
      download: 'Download', copy: 'Copy', reset: 'Reset',
      note: 'Put the file at the <strong>root</strong> of the USB stick (or of a second ISO for a VM). Setup reads it at boot: after any change, start the install again. Check the edition name with <code>dism /Get-WimInfo /WimFile:install.wim</code>.',
      footer: 'Static generator, no dependency, no server. Inspired by schneegans.de.',
      warn_edition: 'Enter the exact edition name (e.g. “Windows 11 Pro”), otherwise setup will stop.',
      warn_username: 'No local account: the OOBE assistant will ask you to create one.',
      warn_password: 'Empty password: the account will have no password.',
      warn_computername: 'Invalid computer name: 15 characters max, no spaces or special characters.',
      warn_win11_no_bypass: 'Windows 11 requires TPM 2.0 and Secure Boot. Tick “Bypass” for a VM or unsupported hardware.',
      copied: 'Copied!'
    },
    de: {
      intro: 'Erzeugt eine <strong>autounattend.xml</strong> für eine unbeaufsichtigte Windows 10/11-Installation. Alles läuft im Browser: nichts wird hochgeladen, die Datei entsteht lokal.',
      s1: 'Zielsystem', winver: 'Version', arch: 'Architektur',
      edition: 'Edition (exakter Image-Name)', productkey: 'Produktschlüssel', optional: '(optional)',
      s2: 'Sprache & Region', locale: 'Installationssprache', tz: 'Zeitzone',
      s3: 'Datenträger', diskpart: 'Partitionierung',
      disk_uefi: 'UEFI / GPT — Datenträger löschen',
      disk_mbr: 'BIOS / MBR — Datenträger löschen',
      disk_none: 'Unverändert lassen (manuell wählen)',
      diskn: 'Datenträgernummer',
      s4: 'Rechner & Konto', computername: 'Computername', username: 'Benutzername',
      password: 'Passwort',
      autologon: 'Automatische Anmeldung', autologon_h: 'Meldet dich direkt nach der Installation an.',
      s5: 'Optionen',
      skipoobe: 'OOBE-Assistent überspringen', skipoobe_h: 'Blendet Datenschutz-, WLAN- und Microsoft-Konto-Seiten aus.',
      bypass: 'Windows 11-Anforderungen umgehen', bypass_h: 'TPM 2.0, Secure Boot, RAM, CPU — VMs und nicht unterstützte Hardware.',
      debloat: 'Vorinstallierte Apps entfernen', debloat_h: 'Bing, Xbox, Teams, Clipchamp, Solitaire… bei der ersten Anmeldung.',
      privacy: 'Telemetrie reduzieren', privacy_h: 'Telemetrie, Werbe-ID, Cortana, Widgets, Vorschläge.',
      rdp: 'Remotedesktop aktivieren', rdp_h: 'RDP + Firewallregel. Nur in vertrauenswürdigen Netzen.',
      preview: 'autounattend.xml', clientside: '100 % lokal',
      download: 'Herunterladen', copy: 'Kopieren', reset: 'Zurücksetzen',
      note: 'Lege die Datei in das <strong>Wurzelverzeichnis</strong> des USB-Sticks (oder eines zweiten ISO für eine VM). Setup liest sie beim Start: nach Änderungen die Installation neu starten. Edition prüfen mit <code>dism /Get-WimInfo /WimFile:install.wim</code>.',
      footer: 'Statischer Generator, ohne Abhängigkeiten, ohne Server. Inspiriert von schneegans.de.',
      warn_edition: 'Exakten Editionsnamen angeben (z. B. „Windows 11 Pro“), sonst bricht das Setup ab.',
      warn_username: 'Kein lokales Konto: der OOBE-Assistent verlangt eines.',
      warn_password: 'Leeres Passwort: das Konto wird ohne Passwort erstellt.',
      warn_computername: 'Ungültiger Computername: max. 15 Zeichen, keine Leer- oder Sonderzeichen.',
      warn_win11_no_bypass: 'Windows 11 verlangt TPM 2.0 und Secure Boot. Für VM oder fremde Hardware „Umgehen“ anhaken.',
      copied: 'Kopiert!'
    },
    es: {
      intro: 'Genera un archivo <strong>autounattend.xml</strong> para una instalación desatendida de Windows 10/11. Todo ocurre en tu navegador: no se envía nada, el archivo se crea localmente.',
      s1: 'Sistema destino', winver: 'Versión', arch: 'Arquitectura',
      edition: 'Edición (nombre exacto de la imagen)', productkey: 'Clave de producto', optional: '(opcional)',
      s2: 'Idioma y región', locale: 'Idioma de instalación', tz: 'Zona horaria',
      s3: 'Disco', diskpart: 'Particionado',
      disk_uefi: 'UEFI / GPT — borrar el disco',
      disk_mbr: 'BIOS / MBR — borrar el disco',
      disk_none: 'No tocar (elegir a mano)',
      diskn: 'Número de disco',
      s4: 'Equipo y cuenta', computername: 'Nombre del equipo', username: 'Nombre de usuario',
      password: 'Contraseña',
      autologon: 'Inicio de sesión automático', autologon_h: 'Entra directamente tras la instalación.',
      s5: 'Opciones',
      skipoobe: 'Saltar el asistente OOBE', skipoobe_h: 'Oculta privacidad, Wi-Fi y cuenta Microsoft.',
      bypass: 'Evitar requisitos de Windows 11', bypass_h: 'TPM 2.0, Secure Boot, RAM, CPU — VM y hardware no compatible.',
      debloat: 'Quitar aplicaciones preinstaladas', debloat_h: 'Bing, Xbox, Teams, Clipchamp, Solitaire… en el primer inicio.',
      privacy: 'Reducir la telemetría', privacy_h: 'Telemetría, ID de publicidad, Cortana, widgets, sugerencias.',
      rdp: 'Activar Escritorio remoto', rdp_h: 'RDP + regla de firewall. Solo en una red de confianza.',
      preview: 'autounattend.xml', clientside: '100 % local',
      download: 'Descargar', copy: 'Copiar', reset: 'Restablecer',
      note: 'Coloca el archivo en la <strong>raíz</strong> del USB (o de un segundo ISO para una VM). El setup lo lee al arrancar: tras modificarlo, reinicia la instalación. Comprueba el nombre de la edición con <code>dism /Get-WimInfo /WimFile:install.wim</code>.',
      footer: 'Generador estático, sin dependencias ni servidor. Inspirado en schneegans.de.',
      warn_edition: 'Indica el nombre exacto de la edición (p. ej. «Windows 11 Pro»), o el setup se detendrá.',
      warn_username: 'Sin cuenta local: el asistente OOBE pedirá crearla.',
      warn_password: 'Contraseña vacía: la cuenta se creará sin contraseña.',
      warn_computername: 'Nombre de equipo no válido: 15 caracteres máx., sin espacios ni símbolos.',
      warn_win11_no_bypass: 'Windows 11 exige TPM 2.0 y Secure Boot. Marca «Evitar» para una VM o hardware no compatible.',
      copied: '¡Copiado!'
    }
  };

  /* ------------------------------------------------------------ data sets */

  var LOCALES = [
    ['fr-FR', 'Romance Standard Time'],
    ['fr-CA', 'Eastern Standard Time'],
    ['en-US', 'Eastern Standard Time'],
    ['en-GB', 'GMT Standard Time'],
    ['de-DE', 'W. Europe Standard Time'],
    ['de-AT', 'W. Europe Standard Time'],
    ['de-CH', 'W. Europe Standard Time'],
    ['es-ES', 'Romance Standard Time'],
    ['es-MX', 'Central Standard Time (Mexico)'],
    ['it-IT', 'W. Europe Standard Time'],
    ['nl-NL', 'W. Europe Standard Time'],
    ['pt-PT', 'GMT Standard Time'],
    ['pt-BR', 'E. South America Standard Time'],
    ['pl-PL', 'Central European Standard Time'],
    ['cs-CZ', 'Central Europe Standard Time'],
    ['sk-SK', 'Central Europe Standard Time'],
    ['hu-HU', 'Central Europe Standard Time'],
    ['ro-RO', 'GTB Standard Time'],
    ['el-GR', 'GTB Standard Time'],
    ['sv-SE', 'W. Europe Standard Time'],
    ['nb-NO', 'W. Europe Standard Time'],
    ['da-DK', 'Romance Standard Time'],
    ['fi-FI', 'FLE Standard Time'],
    ['tr-TR', 'Turkey Standard Time'],
    ['ru-RU', 'Russian Standard Time'],
    ['uk-UA', 'FLE Standard Time'],
    ['ja-JP', 'Tokyo Standard Time'],
    ['ko-KR', 'Korea Standard Time'],
    ['zh-CN', 'China Standard Time'],
    ['zh-TW', 'Taipei Standard Time'],
    ['ar-SA', 'Arab Standard Time'],
    ['he-IL', 'Israel Standard Time'],
    ['hi-IN', 'India Standard Time']
  ];

  var TZS = [
    'Romance Standard Time', 'W. Europe Standard Time', 'Central Europe Standard Time',
    'Central European Standard Time', 'GTB Standard Time', 'FLE Standard Time',
    'GMT Standard Time', 'Eastern Standard Time', 'Central Standard Time',
    'Mountain Standard Time', 'Pacific Standard Time', 'E. South America Standard Time',
    'Tokyo Standard Time', 'Korea Standard Time', 'China Standard Time', 'Taipei Standard Time',
    'India Standard Time', 'Arab Standard Time', 'Israel Standard Time', 'Turkey Standard Time',
    'Russian Standard Time', 'UTC'
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

  /* ------------------------------------------------------------- helpers */

  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function escHtml(s) {
    return esc(s).replace(/'/g, '&#39;');
  }

  function pad(n) { return new Array(n + 1).join('  '); }

  /* --------------------------------------------------------- xml builder */

  function component(name, arch, body, depth) {
    var i = pad(depth);
    var inner = body.replace(/^(?=.)/gm, '  ');
    return i + '<component name="' + name + '" processorArchitecture="' + arch +
      '" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS"\n' +
      i + '           xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State"\n' +
      i + '           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n' +
      inner +
      i + '</component>\n';
  }

  function buildXml(o) {
    var arch = o.arch, loc = o.locale, out = '';

    /* ---- windowsPE ---- */
    var pe = '';
    pe += pad(4) + '<SetupUILanguage>\n' + pad(5) + '<UILanguage>' + esc(loc) + '</UILanguage>\n' + pad(4) + '</SetupUILanguage>\n';
    pe += pad(4) + '<InputLocale>' + esc(loc) + '</InputLocale>\n';
    pe += pad(4) + '<SystemLocale>' + esc(loc) + '</SystemLocale>\n';
    pe += pad(4) + '<UILanguage>' + esc(loc) + '</UILanguage>\n';
    pe += pad(4) + '<UserLocale>' + esc(loc) + '</UserLocale>\n';

    var setup = '';

    if (o.diskpart === 'uefi') {
      setup += pad(4) + '<DiskConfiguration>\n';
      setup += pad(5) + '<Disk wcm:action="add">\n';
      setup += pad(6) + '<DiskID>' + o.disk + '</DiskID>\n';
      setup += pad(6) + '<WillWipeDisk>true</WillWipeDisk>\n';
      setup += pad(6) + '<CreatePartitions>\n';
      setup += pad(7) + '<CreatePartition wcm:action="add"><Order>1</Order><Type>EFI</Type><Size>100</Size></CreatePartition>\n';
      setup += pad(7) + '<CreatePartition wcm:action="add"><Order>2</Order><Type>MSR</Type><Size>16</Size></CreatePartition>\n';
      setup += pad(7) + '<CreatePartition wcm:action="add"><Order>3</Order><Type>Primary</Type><Extend>true</Extend></CreatePartition>\n';
      setup += pad(6) + '</CreatePartitions>\n';
      setup += pad(6) + '<ModifyPartitions>\n';
      setup += pad(7) + '<ModifyPartition wcm:action="add">\n';
      setup += pad(8) + '<Order>1</Order><PartitionID>1</PartitionID><Format>FAT32</Format><Label>System</Label>\n';
      setup += pad(7) + '</ModifyPartition>\n';
      setup += pad(7) + '<ModifyPartition wcm:action="add">\n';
      setup += pad(8) + '<Order>2</Order><PartitionID>3</PartitionID><Format>NTFS</Format><Label>Windows</Label><Letter>C</Letter>\n';
      setup += pad(7) + '</ModifyPartition>\n';
      setup += pad(6) + '</ModifyPartitions>\n';
      setup += pad(5) + '</Disk>\n';
      setup += pad(5) + '<WillShowUI>OnError</WillShowUI>\n';
      setup += pad(4) + '</DiskConfiguration>\n';
    } else if (o.diskpart === 'mbr') {
      setup += pad(4) + '<DiskConfiguration>\n';
      setup += pad(5) + '<Disk wcm:action="add">\n';
      setup += pad(6) + '<DiskID>' + o.disk + '</DiskID>\n';
      setup += pad(6) + '<WillWipeDisk>true</WillWipeDisk>\n';
      setup += pad(6) + '<CreatePartitions>\n';
      setup += pad(7) + '<CreatePartition wcm:action="add"><Order>1</Order><Type>Primary</Type><Size>500</Size></CreatePartition>\n';
      setup += pad(7) + '<CreatePartition wcm:action="add"><Order>2</Order><Type>Primary</Type><Extend>true</Extend></CreatePartition>\n';
      setup += pad(6) + '</CreatePartitions>\n';
      setup += pad(6) + '<ModifyPartitions>\n';
      setup += pad(7) + '<ModifyPartition wcm:action="add">\n';
      setup += pad(8) + '<Order>1</Order><PartitionID>1</PartitionID><Active>true</Active><Format>NTFS</Format><Label>System Reserved</Label>\n';
      setup += pad(7) + '</ModifyPartition>\n';
      setup += pad(7) + '<ModifyPartition wcm:action="add">\n';
      setup += pad(8) + '<Order>2</Order><PartitionID>2</PartitionID><Format>NTFS</Format><Label>Windows</Label><Letter>C</Letter>\n';
      setup += pad(7) + '</ModifyPartition>\n';
      setup += pad(6) + '</ModifyPartitions>\n';
      setup += pad(5) + '</Disk>\n';
      setup += pad(5) + '<WillShowUI>OnError</WillShowUI>\n';
      setup += pad(4) + '</DiskConfiguration>\n';
    }

    setup += pad(4) + '<ImageInstall>\n';
    setup += pad(5) + '<OSImage>\n';
    setup += pad(6) + '<InstallFrom>\n';
    setup += pad(7) + '<MetaData wcm:action="add">\n';
    setup += pad(8) + '<Key>/IMAGE/NAME</Key>\n';
    setup += pad(8) + '<Value>' + esc(o.edition) + '</Value>\n';
    setup += pad(7) + '</MetaData>\n';
    setup += pad(6) + '</InstallFrom>\n';
    if (o.diskpart !== 'none') {
      setup += pad(6) + '<InstallTo>\n';
      setup += pad(7) + '<DiskID>' + o.disk + '</DiskID>\n';
      setup += pad(7) + '<PartitionID>' + (o.diskpart === 'uefi' ? 3 : 2) + '</PartitionID>\n';
      setup += pad(6) + '</InstallTo>\n';
    }
    setup += pad(6) + '<WillShowUI>OnError</WillShowUI>\n';
    setup += pad(5) + '</OSImage>\n';
    setup += pad(4) + '</ImageInstall>\n';

    if (o.bypass) {
      var bp = [
        'BypassTPMCheck', 'BypassSecureBootCheck', 'BypassRAMCheck', 'BypassCPUCheck', 'BypassStorageCheck'
      ];
      setup += pad(4) + '<RunSynchronous>\n';
      bp.forEach(function (v, idx) {
        setup += pad(5) + '<RunSynchronousCommand wcm:action="add">\n';
        setup += pad(6) + '<Order>' + (idx + 1) + '</Order>\n';
        setup += pad(6) + '<Path>reg add HKLM\\SYSTEM\\Setup\\LabConfig /v ' + v + ' /t REG_DWORD /d 1 /f</Path>\n';
        setup += pad(5) + '</RunSynchronousCommand>\n';
      });
      setup += pad(4) + '</RunSynchronous>\n';
    }

    setup += pad(4) + '<UserData>\n';
    setup += pad(5) + '<AcceptEula>true</AcceptEula>\n';
    if (o.productkey) {
      setup += pad(5) + '<ProductKey>\n';
      setup += pad(6) + '<Key>' + esc(o.productkey) + '</Key>\n';
      setup += pad(6) + '<WillShowUI>OnError</WillShowUI>\n';
      setup += pad(5) + '</ProductKey>\n';
    }
    setup += pad(4) + '</UserData>\n';

    out += pad(2) + '<settings pass="windowsPE">\n';
    out += component('Microsoft-Windows-International-Core-WinPE', arch, pe, 4);
    out += component('Microsoft-Windows-Setup', arch, setup, 4);
    out += pad(2) + '</settings>\n';

    /* ---- specialize ---- */
    var sp = '';
    if (o.computername) sp += pad(4) + '<ComputerName>' + esc(o.computername) + '</ComputerName>\n';
    sp += pad(4) + '<TimeZone>' + esc(o.tz) + '</TimeZone>\n';
    out += pad(2) + '<settings pass="specialize">\n';
    out += component('Microsoft-Windows-Shell-Setup', arch, sp, 4);

    var regs = [];
    if (o.privacy) {
      regs.push('reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f');
      regs.push('reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\CloudContent" /v DisableWindowsConsumerFeatures /t REG_DWORD /d 1 /f');
      regs.push('reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" /v AllowCortana /t REG_DWORD /d 0 /f');
      regs.push('reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Dsh" /v AllowNewsAndInterests /t REG_DWORD /d 0 /f');
      regs.push('reg add "HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\AdvertisingInfo" /v DisabledByDefault /t REG_DWORD /d 1 /f');
      regs.push('reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting" /v Disabled /t REG_DWORD /d 1 /f');
      regs.push('sc config DiagTrack start= disabled');
    }
    if (o.rdp) {
      regs.push('reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 0 /f');
      regs.push('netsh advfirewall firewall add rule name="RDP-TCP 3389" dir=in action=allow protocol=TCP localport=3389');
    }
    if (regs.length) {
      var dep = pad(4) + '<RunSynchronous>\n';
      regs.forEach(function (cmd, idx) {
        dep += pad(5) + '<RunSynchronousCommand wcm:action="add">\n';
        dep += pad(6) + '<Order>' + (idx + 1) + '</Order>\n';
        dep += pad(6) + '<Path>' + esc(cmd) + '</Path>\n';
        dep += pad(5) + '</RunSynchronousCommand>\n';
      });
      dep += pad(4) + '</RunSynchronous>\n';
      out += component('Microsoft-Windows-Deployment', arch, dep, 4);
    }
    out += pad(2) + '</settings>\n';

    /* ---- oobeSystem ---- */
    var ic = '';
    ic += pad(4) + '<InputLocale>' + esc(loc) + '</InputLocale>\n';
    ic += pad(4) + '<SystemLocale>' + esc(loc) + '</SystemLocale>\n';
    ic += pad(4) + '<UILanguage>' + esc(loc) + '</UILanguage>\n';
    ic += pad(4) + '<UserLocale>' + esc(loc) + '</UserLocale>\n';

    var sh = '';
    sh += pad(4) + '<OOBE>\n';
    if (o.skipoobe) {
      sh += pad(5) + '<HideEULAPage>true</HideEULAPage>\n';
      sh += pad(5) + '<HideOnlineAccountScreens>true</HideOnlineAccountScreens>\n';
      sh += pad(5) + '<HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>\n';
    }
    sh += pad(5) + '<ProtectYourPC>3</ProtectYourPC>\n';
    sh += pad(4) + '</OOBE>\n';

    if (o.username) {
      sh += pad(4) + '<UserAccounts>\n';
      sh += pad(5) + '<LocalAccounts>\n';
      sh += pad(6) + '<LocalAccount wcm:action="add">\n';
      sh += pad(7) + '<Name>' + esc(o.username) + '</Name>\n';
      sh += pad(7) + '<DisplayName>' + esc(o.username) + '</DisplayName>\n';
      sh += pad(7) + '<Group>Administrators</Group>\n';
      sh += pad(7) + '<Password>\n';
      sh += pad(8) + '<Value>' + esc(o.password) + '</Value>\n';
      sh += pad(8) + '<PlainText>true</PlainText>\n';
      sh += pad(7) + '</Password>\n';
      sh += pad(6) + '</LocalAccount>\n';
      sh += pad(5) + '</LocalAccounts>\n';
      sh += pad(4) + '</UserAccounts>\n';

      if (o.autologon) {
        sh += pad(4) + '<AutoLogon>\n';
        sh += pad(5) + '<Enabled>true</Enabled>\n';
        sh += pad(5) + '<Username>' + esc(o.username) + '</Username>\n';
        sh += pad(5) + '<Password>\n';
        sh += pad(6) + '<Value>' + esc(o.password) + '</Value>\n';
        sh += pad(6) + '<PlainText>true</PlainText>\n';
        sh += pad(5) + '</Password>\n';
        sh += pad(5) + '<LogonCount>1</LogonCount>\n';
        sh += pad(4) + '</AutoLogon>\n';
      }
    }

    if (o.debloat) {
      var ps = "$apps=" + DEBLOAT.map(function (a) { return "'" + a + "'"; }).join(',') + ';' +
        'foreach($a in $apps){Get-AppxPackage -AllUsers $a | Remove-AppxPackage -AllUsers -ErrorAction SilentlyContinue;' +
        'Get-AppxProvisionedPackage -Online | Where-Object {$_.DisplayName -eq $a} | Remove-AppxProvisionedPackage -Online -ErrorAction SilentlyContinue}';
      sh += pad(4) + '<FirstLogonCommands>\n';
      sh += pad(5) + '<SynchronousCommand wcm:action="add">\n';
      sh += pad(6) + '<Order>1</Order>\n';
      sh += pad(6) + '<CommandLine>powershell -NoProfile -ExecutionPolicy Bypass -Command &quot;' + ps + '&quot;</CommandLine>\n';
      sh += pad(6) + '<RequiresUserInput>false</RequiresUserInput>\n';
      sh += pad(5) + '</SynchronousCommand>\n';
      sh += pad(4) + '</FirstLogonCommands>\n';
    }

    out += pad(2) + '<settings pass="oobeSystem">\n';
    out += component('Microsoft-Windows-International-Core', arch, ic, 4);
    out += component('Microsoft-Windows-Shell-Setup', arch, sh, 4);
    out += pad(2) + '</settings>\n';

    return '<?xml version="1.0" encoding="utf-8"?>\n' +
      '<!-- Generated with meumeu.dev/unattend -->\n' +
      '<unattend xmlns="urn:schemas-microsoft-com:unattend">\n' +
      out +
      '</unattend>\n';
  }

  /* ----------------------------------------------------- syntax coloring */

  function highlight(xml) {
    var h = escHtml(xml);
    h = h.replace(/&lt;!--[\s\S]*?--&gt;/g, function (m) { return '<span class="c">' + m + '</span>'; });
    h = h.replace(/(&lt;\/?)([A-Za-z_][\w.:-]*)/g, '$1<span class="t">$2</span>');
    h = h.replace(/([A-Za-z_][\w.:-]*)=(&quot;.*?&quot;)/g, '<span class="a">$1</span>=<span class="v">$2</span>');
    return h;
  }

  /* ------------------------------------------------------------- reading */

  function readForm() {
    return {
      winver: $('winver').value,
      arch: $('arch').value,
      edition: $('edition').value.trim(),
      productkey: $('productkey').value.trim(),
      locale: $('locale').value,
      tz: $('tz').value,
      diskpart: $('diskpart').value,
      disk: parseInt($('diskn').value, 10) || 0,
      computername: $('computername').value.trim(),
      username: $('username').value.trim(),
      password: $('password').value,
      autologon: $('autologon').checked,
      skipoobe: $('skipoobe').checked,
      bypass: $('bypass').checked,
      debloat: $('debloat').checked,
      privacy: $('privacy').checked,
      rdp: $('rdp').checked
    };
  }

  var currentXml = '';

  function render() {
    var o = readForm();
    currentXml = buildXml(o);
    $('out').innerHTML = highlight(currentXml);

    var t = I18N[document.documentElement.lang] || I18N.fr;
    var warns = [];
    if (!o.edition) warns.push(t.warn_edition);
    if (!o.username) warns.push(t.warn_username);
    if (!o.password && o.username) warns.push(t.warn_password);
    if (o.computername && !/^[A-Za-z0-9-]{1,15}$/.test(o.computername)) warns.push(t.warn_computername);
    if (o.winver === '11' && !o.bypass && (o.arch === 'amd64')) warns.push(t.warn_win11_no_bypass);

    var w = $('warn');
    if (warns.length) { w.innerHTML = warns.map(escHtml).join('<br>'); w.classList.add('show'); }
    else { w.innerHTML = ''; w.classList.remove('show'); }
  }

  /* --------------------------------------------------------------- setup */

  function fillEditions() {
    var v = $('winver').value;
    var list = EDITIONS[v] || EDITIONS[11];
    var dl = $('editionList');
    dl.innerHTML = list.map(function (e) { return '<option value="' + escHtml(e) + '"></option>'; }).join('');
    var cur = $('edition').value.trim();
    if (!cur || /^Windows (10|11) /.test(cur)) $('edition').value = list[5] || list[0];
  }

  function fillLocales() {
    var sel = $('locale');
    sel.innerHTML = LOCALES.map(function (l) {
      return '<option value="' + l[0] + '">' + l[0] + '</option>';
    }).join('');
    var nav = (navigator.language || 'fr-FR').replace('_', '-');
    var match = LOCALES.filter(function (l) { return l[0] === nav; })[0] ||
      LOCALES.filter(function (l) { return l[0].split('-')[0] === nav.split('-')[0]; })[0] ||
      LOCALES[0];
    sel.value = match[0];
  }

  function fillTz() {
    var sel = $('tz');
    sel.innerHTML = TZS.map(function (z) {
      return '<option value="' + z + '">' + z + '</option>';
    }).join('');
  }

  function syncTz() {
    var l = LOCALES.filter(function (x) { return x[0] === $('locale').value; })[0];
    if (l) $('tz').value = l[1];
  }

  function applyLang(lang) {
    var t = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (t[k] != null) el.textContent = t[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (t[k] != null) el.innerHTML = t[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (t[k] != null) el.placeholder = t[k];
    });
    document.querySelectorAll('.langbar button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
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
    var t = I18N[document.documentElement.lang] || I18N.fr;
    var done = function () {
      var old = b.textContent;
      b.textContent = t.copied;
      setTimeout(function () { b.textContent = old; }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(currentXml).then(done, fallback);
    } else fallback();

    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = currentXml;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { }
      ta.remove();
    }
  }

  function reset() {
    $('winver').value = '11';
    $('arch').value = 'amd64';
    $('productkey').value = '';
    fillEditions();
    fillLocales();
    syncTz();
    $('diskpart').value = 'uefi';
    $('diskn').value = '0';
    $('computername').value = '';
    $('username').value = 'User';
    $('password').value = '';
    $('autologon').checked = true;
    $('skipoobe').checked = true;
    $('bypass').checked = false;
    $('debloat').checked = false;
    $('privacy').checked = false;
    $('rdp').checked = false;
    render();
  }

  var timer = null;
  function debounced() {
    clearTimeout(timer);
    timer = setTimeout(render, 90);
  }

  function init() {
    fillTz();
    fillLocales();
    fillEditions();
    syncTz();

    var lang = 'fr';
    try { lang = localStorage.getItem('unattend-lang') || lang; } catch (e) { }
    if (!I18N[lang]) lang = 'fr';

    document.querySelectorAll('.langbar button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
    });

    document.querySelectorAll('input, select').forEach(function (el) {
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

    $('computername').placeholder = 'PC-01';
    $('username').placeholder = 'User';
    $('password').placeholder = '••••••••';

    applyLang(lang);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
