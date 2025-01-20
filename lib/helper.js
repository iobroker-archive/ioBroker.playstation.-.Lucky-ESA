module.exports = {
    /**
     * Create profile objects
     */
    async createProfile() {
        let common = {};
        common = {
            name: {
                en: "Profile",
                de: "Profil",
                ru: "Профиль",
                pt: "Perfil",
                nl: "Profiel",
                fr: "Profil",
                it: "Profilo",
                es: "Perfil",
                pl: "Profil",
                uk: "Профіль",
                "zh-cn": "简介",
            },
            desc: "Profile",
            icon: "img/profile.png",
        };
        await this.createDataPoint(`profile`, common, "channel", null, null);
        common = {
            name: {
                en: "Profile remote control",
                de: "Profil Fernbedienung",
                ru: "Профиль дистанционного управления",
                pt: "Controle remoto do perfil",
                nl: "Profiel afstandsbediening",
                fr: "Télécommande de profil",
                it: "Controllo remoto profilo",
                es: "Control remoto de perfiles",
                pl: "Pilot profilu",
                uk: "Профіль дистанційного керування",
                "zh-cn": "配置远程控制",
            },
            desc: "Profile remote control",
            icon: "img/fernbedienung.png",
        };
        await this.createDataPoint(`profile_remote`, common, "channel", null, null);
        common = {
            type: "number",
            role: "value",
            name: {
                en: "Limit for friends list",
                de: "Limit für Freundesliste",
                ru: "Ограничение для списка друзей",
                pt: "Limite para a lista de amigos",
                nl: "Limiet voor vriendenlijst",
                fr: "Limite pour la liste des amis",
                it: "Limiti per la lista degli amici",
                es: "Límite para lista de amigos",
                pl: "Limit dla listy znajomych",
                uk: "Ліміт для списку друзів",
                "zh-cn": "朋友列表的限制",
            },
            desc: "Limit for friends list",
            read: true,
            write: true,
            def: 50,
        };
        await this.createDataPoint(`profile_remote.limit`, common, "state", null, null);
        common = {
            type: "mixed",
            role: "value",
            name: {
                en: "Data from the user with the account ID",
                de: "Daten des Benutzers mit der Konto-ID",
                ru: "Данные от пользователя с идентификатором учетной записи",
                pt: "Dados do usuário com o ID da conta",
                nl: "Gegevens van de gebruiker met het account-ID",
                fr: "Données de l'utilisateur avec l'ID du compte",
                it: "Dati dell'utente con l'ID dell'account",
                es: "Datos del usuario con el ID de la cuenta",
                pl: "Dane użytkownika z identyfikatorem konta",
                uk: "Дані з користувача з ідентифікатором облікового запису",
                "zh-cn": "账户ID用户提供的数据",
            },
            desc: "Data from the user with the account ID",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote.account_id`, common, "state", null, null);
        common = {
            type: "mixed",
            role: "value",
            name: {
                en: "Load game list with accound-id",
                de: "Spielliste mit accound-id laden",
                ru: "Загрузить список игр с accound-id",
                pt: "Lista de jogos de carga com accound-id",
                nl: "Gameslijst laden met accound-id",
                fr: "Charger la liste des jeux avec accound-id",
                it: "Carico elenco di giochi con accound-id",
                es: "Lista del juego de carga con accound-id",
                pl: "Wczytaj listę gier z kontem-id",
                uk: "Список ігор на завантаження з прискоренням",
                "zh-cn": "用 accoun-id 装入游戏列表",
            },
            desc: "Load game list with accound-id",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote.gameList`, common, "state", 0, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Game infos with title-id (from gameListe request)",
                de: "Spielinfos mit Titel-ID (aus gameListe Anfrage)",
                ru: "Game infos with title-id (from gameListe request)",
                pt: "InformaÃ§Ãμes do jogo com title-id (de gameListe request)",
                nl: "Spelinformatie met titel-id (van gameListe verzoek)",
                fr: "Infos de jeu avec title-id (de gameListe request)",
                it: "Informazioni sul gioco con titolo-id (da richiesta gameListe)",
                es: "Información del juego con title-id (a partir de petición GameListe)",
                pl: "Gry infos z title- id (z gameListe wniosek)",
                uk: "Інформація про гру з назвою-id (за запитом про гру)",
                "zh-cn": "带有标题代号的游戏信息( 来自 gameListe 请求)",
            },
            desc: "Game infos with title-id (from gameListe request)",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`profile_remote.gameTitle`, common, "state", "", null);
        common = {
            type: "mixed",
            role: "value",
            name: {
                en: "Data from the user with the online ID",
                de: "Daten des Nutzers mit der Online-ID",
                ru: "Данные пользователя с онлайн-идентификацией",
                pt: "Dados do usuário com o ID online",
                nl: "Gegevens van de gebruiker met de online ID",
                fr: "Données de l'utilisateur avec l'ID en ligne",
                it: "Dati dell'utente con l'ID online",
                es: "Datos del usuario con el ID en línea",
                pl: "Dane użytkownika z identyfikatorem online",
                uk: "Дані з користувача з ідентифікатором онлайн",
                "zh-cn": "使用在线ID的用户数据",
            },
            desc: "Data from the user with the online ID",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`profile_remote.online_id`, common, "state", "", null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "ALL trophys with online-id (loadtime approx. 1 min)",
                de: "ALLe Trophäen mit Online-ID (Lastzeit ca. 1 min)",
                ru: "Все трофеи с онлайн-id (приложение времени загрузки). 1 мин.)",
                pt: "TODOS os troféus com on-line-id (hora de carga aprox. 1 min)",
                nl: "ALLE trofeeën met online-id (laadtijd ca. 1 min)",
                fr: "TOUS les trophées avec en ligne-id (chargement env. 1 min)",
                it: "TUTTI i trofei con online-id (tasso di carico ca. 1 min)",
                es: "TODOS los trofeos con identificación en línea (tiempo de carga aprox. 1 min)",
                pl: "WSZYSTKIE trophys with online- id (loadtime ok. 1 min)",
                uk: "Всі трофізи з онлайн-ід (завантажити час близько. 1 хв",
                "zh-cn": "所有奖杯都使用在线标识(负载时间约为. 1分钟)",
            },
            desc: "ALL trophys with online-id (loadtime approx. 1 min)",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`profile_remote.trophy_all`, common, "state", "", null);
        common = {
            type: "mixed",
            role: "value",
            name: {
                en: "Trophys title with account-id",
                de: "Trophys Titel mit Konto-ID",
                ru: "Оригинальное название: Trophys with account-id",
                pt: "Título de troféus com conta-id",
                nl: "Trophys titel met account-id",
                fr: "Titre de trophée avec compte-id",
                it: "Titolo trofei con account-id",
                es: "Título de los trofeos con cuenta-id",
                pl: "Tytuł Trophys z kontem-id",
                uk: "Заголовок Трофіза з обліковим записом",
                "zh-cn": "带有账号的 Trophys 标题",
            },
            desc: "Trophys title with account-id",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote.trophy_title`, common, "state", 0, null);
        common = {
            type: "string",
            role: "json",
            name: {
                en: "Trophys title group with npCommunication-id and platform",
                de: "Trophäen Titelgruppe mit npCommunication-id und Plattform",
                ru: "Заголовок Trophys с npCommunication-id и платформой",
                pt: "Trophys grupo título com npCommunication-id e plataforma",
                nl: "Trophys titelgroep met npCommunicatie-id en platform",
                fr: "Groupe titre Trophys avec npCommunication-id et plateforme",
                it: "Trofei gruppo titolo con npCommunication-id e piattaforma",
                es: "Grupo de título de trofeos con npCommunication-id y plataforma",
                pl: "Grupa tytułowa Trophys z npCommunication- id i platformą",
                uk: "Трофіз назва групи з npCommunication-id і платформою",
                "zh-cn": "带有 np 通信标识和平台的 Trophys 标题组",
            },
            desc: "Trophys title group with npCommunication-id and platform",
            read: true,
            write: true,
            def: JSON.stringify(["<npCommunicationId>", "<platform>"]),
        };
        await this.createDataPoint(
            `profile_remote.trophy_title_group`,
            common,
            "state",
            JSON.stringify(["<npCommunicationId>", "<platform>"], null),
        );
        common = {
            type: "string",
            role: "json",
            name: {
                en: "Trophys title user group with account-id, npCommunication-id and platform",
                de: "Trophäen Titel Benutzergruppe mit Account-ID, npCommunication-id und Plattform",
                ru: "Заголовок Trophys с аккаунт-id, npCommunication-id и платформой",
                pt: "Trophys grupo de usuários título com conta-id, npCommunication-id e plataforma",
                nl: "Trophys titel gebruikersgroep met account-id, npCommunicatie-id en platform",
                fr: "Groupe d'utilisateurs de titres Trophys avec compte-id, npCommunication-id et plateforme",
                it: "Trofei titolo gruppo utente con account-id, npCommunication-id e piattaforma",
                es: "Grupo de usuarios de títulos de Trophys con cuenta-id, npCommunication-id y plataforma",
                pl: "Trophys grupa użytkowników tytułu z konta-id, npCommunication- id i platformy",
                uk: "Група користувачів трофіза з обліковим записом, npCommunication-id та платформи",
                "zh-cn": "Trophys 标题用户组, 包括账户代号、 np 通信代号和平台",
            },
            desc: "Trophys title user group with account-id, npCommunication-id and platform",
            read: true,
            write: true,
            def: JSON.stringify(["<accountId>", "<npCommunicationId>", "<platform>"]),
        };
        await this.createDataPoint(
            `profile_remote.trophy_title_group_user`,
            common,
            "state",
            JSON.stringify(["<accountId>", "<npCommunicationId>", "<platform>"], null),
        );
        common = {
            type: "string",
            role: "json",
            name: {
                en: "Trophies for title with npCommunication-id, group-id and platform",
                de: "Trophäen für Titel mit npCommunication-id, group-id und Plattform",
                ru: "Трофеи для названия с npCommunication-id, group-id и платформой",
                pt: "Troféus para o título com npCommunication-id, group-id e plataforma",
                nl: "Trofeeën voor titel met npCommunicatie-id, groeps-id en platform",
                fr: "Trophées pour titre avec npCommunication-id, groupe-id et plateforme",
                it: "Trofei per titolo con npCommunication-id, group-id e piattaforma",
                es: "Trofeos para título con npCommunication-id, group-id y plataforma",
                pl: "Trofea na tytuł z npCommunication- id, group- id i platformy",
                uk: "Трофії за звання з npCommunication-id, група-id і платформою",
                "zh-cn": "NpCommunication-id、 group-id 和平台的标题格式",
            },
            desc: "Trophies for title with npCommunication-id, group-id and platform",
            read: true,
            write: true,
            def: JSON.stringify(["<npCommunicationId>", "<groupId>", "<platform>"]),
        };
        await this.createDataPoint(
            `profile_remote.trophies_for_title`,
            common,
            "state",
            JSON.stringify(["<npCommunicationId>", "<groupId>", "<platform>"], null),
        );
        common = {
            type: "string",
            role: "json",
            name: {
                en: "Trophies earned for title with account-id, npCommunication-id, group-id and platform",
                de: "Für den Titel verdiente Trophäen mit Konto-ID, npCommunication-id, Gruppen-ID und Plattform",
                ru: "Трофеи, заработанные для титула со счетом id, npCommunication-id, group-id и платформой",
                pt: "Troféus conquistados pelo título com conta-id, npCommunication-id, group-id e plataforma",
                nl: "Trofeeën verdiend voor titel met account-id, npCommunicatie-id, groep-id en platform",
                fr: "Trophées gagnés pour titre avec compte-id, npCommunication-id, groupe-id et plateforme",
                it: "Trofei guadagnati per titolo con account-id, npCommunication-id, group-id e piattaforma",
                es: "Trofeos ganados por título con cuenta-id, npCommunication-id, group-id y plataforma",
                pl: "Trofea zdobyte na tytuł z konta-id, npCommunication-id, group- id i platformy",
                uk: "Трофії заслужили за звання з обліковим записом, npCommunication-id, група-id і платформою",
                "zh-cn": "以账号、np通信号、集团号和平台获得所有权",
            },
            desc: "Trophies earned for title with account-id, npCommunication-id, group-id and platform",
            read: true,
            write: true,
            def: JSON.stringify(["<accountId>", "<npCommunicationId>", "<groupId>", "<platform>"]),
        };
        await this.createDataPoint(
            `profile_remote.trophies_earned_for_title`,
            common,
            "state",
            JSON.stringify(["<accountId>", "<npCommunicationId>", "<groupId>", "<platform>"], null),
        );
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Request result as JSON",
                de: "Anfrageergebnis als JSON",
                ru: "Результат запроса JSON",
                pt: "Resultado de solicitação como JSON",
                nl: "Resultaat aanvraag als JSON",
                fr: "Résultat de la demande en JSON",
                it: "Richiedi il risultato come JSON",
                es: "Resultado de la solicitud como JSON",
                pl: "Wynik wniosku jako JSON",
                uk: "Результати пошуку в JSON",
                "zh-cn": "JSON的要求结果",
            },
            desc: "Request result as JSON",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`profile_remote.result`, common, "state", "", null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Friends list without name",
                de: "Freundesliste ohne Namen",
                ru: "Список друзей без имени",
                pt: "Lista de amigos sem nome",
                nl: "Vriendenlijst zonder naam",
                fr: "Liste des amis sans nom",
                it: "Elenco amici senza nome",
                es: "Lista de amigos sin nombre",
                pl: "Lista znajomych bez nazwy",
                uk: "Список друзів без назви",
                "zh-cn": "无名的朋友列表",
            },
            desc: "Friends list without name",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote.friends_without_name`, common, "state", null, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Friends list with name",
                de: "Freundesliste mit Namen",
                ru: "Список друзей с именем",
                pt: "Lista de amigos com nome",
                nl: "Vriendenlijst met naam",
                fr: "Liste d'amis avec nom",
                it: "Elenco amici con nome",
                es: "Lista de amigos con nombre",
                pl: "Lista znajomych z nazwą",
                uk: "Список друзів з ім'ям",
                "zh-cn": "有名字的朋友列表",
            },
            desc: "Friends list with name",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote.friends_with_name`, common, "state", null, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Friends list with name and status",
                de: "Freundesliste mit Namen und Status",
                ru: "Список друзей с именем и статусом",
                pt: "Lista de amigos com nome e status",
                nl: "Vriendenlijst met naam en status",
                fr: "Liste des amis avec nom et statut",
                it: "Elenco amici con nome e stato",
                es: "Lista de amigos con nombre y estado",
                pl: "Lista znajomych z nazwą i statusem",
                uk: "Список друзів з ім'ям та статусом",
                "zh-cn": "有姓名和身份的朋友名单",
            },
            desc: "Friends list with name and status",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote.friends_with_name_status`, common, "state", null, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Blocked user list without name",
                de: "Blockierte Benutzerliste ohne Namen",
                ru: "Заблокированный список пользователей без имени",
                pt: "Lista de usuário bloqueada sem nome",
                nl: "Geblokkeerde gebruikerslijst zonder naam",
                fr: "Liste des utilisateurs bloqués sans nom",
                it: "Lista utente bloccata senza nome",
                es: "Lista de usuarios bloqueada sin nombre",
                pl: "Zablokowana lista użytkowników bez nazwy",
                uk: "Заблокований список користувачів без назви",
                "zh-cn": "没有名称的屏蔽用户列表",
            },
            desc: "Blocked user list without name",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote.blocked_without_name`, common, "state", null, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Blocked user list with name",
                de: "Blockierte Benutzerliste mit Namen",
                ru: "Заблокированный список пользователей с именем",
                pt: "Lista de usuário bloqueada com nome",
                nl: "Geblokkeerde gebruikerslijst met naam",
                fr: "Liste d'utilisateurs bloquée avec nom",
                it: "Lista utente bloccata con nome",
                es: "Lista de usuarios bloqueada con nombre",
                pl: "Zablokowana lista użytkowników z nazwą",
                uk: "Заблокований список користувачів з назвою",
                "zh-cn": "名称被屏蔽的用户列表",
            },
            desc: "Blocked user list with name",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote.blocked_with_name`, common, "state", null, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Online user list without name",
                de: "Online-Benutzerliste ohne Namen",
                ru: "Онлайн список пользователей без имени",
                pt: "Lista de usuários online sem nome",
                nl: "Online gebruikerslijst zonder naam",
                fr: "Liste des utilisateurs en ligne sans nom",
                it: "Elenco degli utenti online senza nome",
                es: "Lista de usuarios en línea sin nombre",
                pl: "Lista użytkowników online bez nazwy",
                uk: "Список користувачів онлайн без імені",
                "zh-cn": "无名在线用户列表",
            },
            desc: "Online user list without name",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote.online_without_name`, common, "state", null, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Online user list with name",
                de: "Online-Benutzerliste mit Namen",
                ru: "Онлайн список пользователей с именем",
                pt: "Lista de usuários online com nome",
                nl: "Online gebruikerslijst met naam",
                fr: "Liste des utilisateurs en ligne avec nom",
                it: "Lista utente online con nome",
                es: "Lista de usuarios en línea con nombre",
                pl: "Lista użytkowników online z nazwą",
                uk: "Онлайн список користувачів з ім'ям",
                "zh-cn": "名称在线用户列表",
            },
            desc: "Online user list with name",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote.online_with_name`, common, "state", null, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Update profile",
                de: "Update-Profil",
                ru: "Профиль обновления",
                pt: "Perfil de atualização",
                nl: "Profiel bijwerken",
                fr: "Mettre à jour le profil",
                it: "Profilo di aggiornamento",
                es: "Perfil de actualización",
                pl: "Aktualizuj profil",
                uk: "Оновлення профілю",
                "zh-cn": "更新配置",
            },
            desc: "Update profile",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote.update_profile`, common, "state", null, null);
    },
    /**
     * @param {object} id
     */
    async createObjects(id) {
        let common = {};
        let icons;
        if (id.icon != null && id.icon != "") {
            icons = { icon: id.icon };
        }
        common = {
            name: id.ps4name,
            desc: id.ps4name,
            statusStates: {
                onlineId: `${this.namespace}.${id.dp}.online`,
            },
            ...icons,
        };
        await this.createDataPoint(id.dp, common, "device", null, null);
        common = {
            type: "boolean",
            role: "info.status",
            name: {
                en: "Device status",
                de: "Gerätestatus",
                ru: "Состояние устройства",
                pt: "Status do dispositivo",
                nl: "Apparaatstatus",
                fr: "État du périphérique",
                it: "Stato del dispositivo",
                es: "Estado del dispositivo",
                pl: "Status urządzenia",
                uk: "Статус на сервери",
                "zh-cn": "设备状态",
            },
            desc: "Device status",
            read: true,
            write: false,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.online`, common, "state", null, null);
        common = {
            name: {
                en: "Device infos",
                de: "Geräteinfos",
                ru: "Информация об устройстве",
                pt: "InformaÃ§Ãμes do dispositivo",
                nl: "Apparaatinformatie",
                fr: "Infos du périphérique",
                it: "Informazioni sul dispositivo",
                es: "Información del dispositivo",
                pl: "Infos urządzenia",
                uk: "Інформація про пристрій",
                "zh-cn": "设备信息",
            },
            desc: "Device infos",
            icon: "img/system.png",
        };
        await this.createDataPoint(`${id.dp}.device`, common, "channel", null, null);
        common = {
            name: {
                en: "Remote control",
                de: "Fernbedienung",
                ru: "Удаленный контроль",
                pt: "Controle remoto",
                nl: "Afstandsbediening",
                fr: "Télécommande",
                it: "Controllo remoto",
                es: "Control remoto",
                pl: "Zdalne sterowanie",
                uk: "Пульт дистанційного керування",
                "zh-cn": "遥控",
            },
            desc: "Remote control",
            icon: "img/fernbedienung.png",
        };
        await this.createDataPoint(`${id.dp}.remote`, common, "channel", null, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "File credentials",
                de: "Dateianmeldeinformationen",
                ru: "Документы",
                pt: "Credenciais de arquivo",
                nl: "Bestandsgegevens",
                fr: "Identification des fichiers",
                it: "Credenziali di file",
                es: "Credenciales de archivo",
                pl: "Kwalifikacje plików",
                uk: "Кримінал файлів",
                "zh-cn": "存档证书",
            },
            desc: "File credentials",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.device.credentials`, common, "state", null, null);
        common = {
            type: "string",
            role: "info.ip",
            name: {
                en: "IP playstation",
                de: "IP Playstation",
                ru: "IP-игрок",
                pt: "Playstation IP",
                nl: "IP-afspeelstation",
                fr: "Station de lecture IP",
                it: "Playstation IP",
                es: "Reproducción IP",
                pl: "Stacja odtwarzania IP",
                uk: "Відтворення IP",
                "zh-cn": "IP 播放站",
            },
            desc: "IP playstation",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.device.ip`, common, "state", null, null);
        common = {
            type: "number",
            role: "info.port",
            name: {
                en: "Device port",
                de: "Geräteport",
                ru: "Порт",
                pt: "Porta do dispositivo",
                nl: "Apparaatpoort",
                fr: "Port du périphérique",
                it: "Porta dispositivo",
                es: "Puerto de dispositivo",
                pl: "Port urządzenia",
                uk: "Пристрої порт",
                "zh-cn": "设备端口",
            },
            desc: "Device port",
            read: true,
            write: false,
            def: 0,
        };
        await this.createDataPoint(`${id.dp}.device.port`, common, "state", null, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Device id",
                de: "Geräte-ID",
                ru: "Устройство id",
                pt: "Id do dispositivo",
                nl: "Apparaat-id",
                fr: "ID du périphérique",
                it: "Dispositivo id",
                es: "Dispositivo id",
                pl: "Identyfikator urządzenia",
                uk: "Пристрої id",
                "zh-cn": "设备编号",
            },
            desc: "Device id",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.device.id`, common, "state", null, null);
        common = {
            type: "string",
            role: "info.name",
            name: {
                en: "Device name",
                de: "Name des Geräts",
                ru: "Название устройства",
                pt: "Nome do dispositivo",
                nl: "Apparaatnaam",
                fr: "Nom du périphérique",
                it: "Nome del dispositivo",
                es: "Nombre del dispositivo",
                pl: "Nazwa urządzenia",
                uk: "Назва пристрою",
                "zh-cn": "设备名称",
            },
            desc: "Device name",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.device.name`, common, "state", null, null);
        common = {
            type: "string",
            role: "info.status",
            name: {
                en: "Device status",
                de: "Gerätestatus",
                ru: "Состояние устройства",
                pt: "Status do dispositivo",
                nl: "Apparaatstatus",
                fr: "État du périphérique",
                it: "Stato del dispositivo",
                es: "Estado del dispositivo",
                pl: "Status urządzenia",
                uk: "Статус на сервери",
                "zh-cn": "设备状态",
            },
            desc: "Device status",
            read: true,
            write: false,
            def: "OFFLINE",
            states: ["STANDBY", "OFFLINE", "ONLINE"],
        };
        await this.createDataPoint(`${id.dp}.device.status`, common, "state", null, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Device type",
                de: "Gerätetyp",
                ru: "Тип устройства",
                pt: "Tipo de dispositivo",
                nl: "Apparaattype",
                fr: "Type de périphérique",
                it: "Tipo di dispositivo",
                es: "Tipo de dispositivo",
                pl: "Typ urządzenia",
                uk: "Тип пристрою",
                "zh-cn": "设备类型",
            },
            desc: "Device type",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.device.type`, common, "state", null, null);
        common = {
            type: "number",
            role: "value",
            name: {
                en: "System version number",
                de: "Systemversionsnummer",
                ru: "Код версии",
                pt: "Número de versão do sistema",
                nl: "Systeemversienummer",
                fr: "Numéro de version du système",
                it: "Numero di versione di sistema",
                es: "Número de versión del sistema",
                pl: "Numer wersji systemu",
                uk: "Номер версії системи",
                "zh-cn": "系统版本编号",
            },
            desc: "System version number",
            read: true,
            write: false,
            def: 0,
        };
        await this.createDataPoint(`${id.dp}.device.systemVersion`, common, "state", null, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Up",
                de: "Nach oben",
                ru: "Вверх",
                pt: "Levanta-te",
                nl: "Omhoog",
                fr: "En haut",
                it: "Su",
                es: "Arriba",
                pl: "Początek rozdziału",
                uk: "Вгору",
                "zh-cn": "上来",
            },
            desc: "Up",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.up`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "down",
                de: "nach unten",
                ru: "вниз",
                pt: "para baixo",
                nl: "neerwaarts",
                fr: "vers le bas",
                it: "verso il basso",
                es: "hacia abajo",
                pl: "w dół",
                uk: "вниз",
                "zh-cn": "下调",
            },
            desc: "Down",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.down`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Left",
                de: "nach Links",
                ru: "Слева",
                pt: "Esquerda",
                nl: "Links",
                fr: "Gauche",
                it: "Sinistra",
                es: "Izquierda",
                pl: "Lewo",
                uk: "Увійти",
                "zh-cn": "左边",
            },
            desc: "Left",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.left`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Right",
                de: "nach Rechts",
                ru: "справа",
                pt: "certo",
                nl: "rechts",
                fr: "droite",
                it: "destra",
                es: "derecho",
                pl: "prawo",
                uk: "увійти",
                "zh-cn": "对",
            },
            desc: "Right",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.right`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Enter",
                de: "Enter",
                ru: "Введите",
                pt: "Entrar",
                nl: "Enter",
                fr: "Entrez",
                it: "Inserisci",
                es: "Entra",
                pl: "Wpisz",
                uk: "Увійти",
                "zh-cn": "输入",
            },
            desc: "Enter",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.enter`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Back",
                de: "Zurück",
                ru: "Назад",
                pt: "Voltar",
                nl: "Terug",
                fr: "Précédent",
                it: "Indietro",
                es: "Atrás",
                pl: "Tył",
                uk: "Зареєструватися",
                "zh-cn": "回来",
            },
            desc: "Back",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.back`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Option",
                de: "Option",
                ru: "Вариант",
                pt: "Opção",
                nl: "Optie",
                fr: "Option",
                it: "Opzione",
                es: "Opción",
                pl: "Opcja",
                uk: "Додатково",
                "zh-cn": "选项",
            },
            desc: "Option",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.option`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "PS",
                de: "PS",
                ru: "PS",
                pt: "PS",
                nl: "PS",
                fr: "PS",
                it: "PS",
                es: "PS",
                pl: "PS",
                uk: "Р",
                "zh-cn": "方案支助",
            },
            desc: "PS",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.ps`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Device Wake On LAN",
                de: "Gerät über LAN aufwecken",
                ru: "Устройство пробуждение на LAN",
                pt: "Dispositivo Wake On LAN",
                nl: "Apparaat Wake On LAN",
                fr: "Réveiller le périphérique sur le réseau local",
                it: "Sveglia dispositivo su LAN",
                es: "Device Wake on LAN",
                pl: "Urządzenie Wake On LAN",
                uk: "Пристрої Wake на локальній мережі",
                "zh-cn": "设备在局域网上Wake",
            },
            desc: "Device Wake On LAN",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.wakeup`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Standby",
                de: "Standby",
                ru: "Резерв",
                pt: "Aguarde",
                nl: "Stand-by",
                fr: "En attente",
                it: "Standby",
                es: "Standby",
                pl: "Stan gotowości",
                uk: "Навігація",
                "zh-cn": "待命状态",
            },
            desc: "Standby",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.standby`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Submit the on-screen keyboard",
                de: "Die Bildschirmtastatur senden",
                ru: "Передайте клавиатуру на экране",
                pt: "Envie o teclado na tela",
                nl: "Stuur het toetsenbord op het scherm",
                fr: "Soumettre le clavier à l'écran",
                it: "Inserisci la tastiera sullo schermo",
                es: "Presentar el teclado en pantalla",
                pl: "Prześlij klawiaturę na ekranie",
                uk: "Надайте на екранну клавіатуру",
                "zh-cn": "提交屏幕键盘.",
            },
            desc: "Submit the on-screen keyboard",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.osk`, common, "state", false, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Own command",
                de: "Eigener Befehl",
                ru: "Собственная команда",
                pt: "Comando próprio",
                nl: "Eigen opdracht",
                fr: "Commande propre",
                it: "Comando",
                es: "Own command",
                pl: "Polecenie własne",
                uk: "Власна команда",
                "zh-cn": "拥有命令",
            },
            desc: "Own command",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.remote.ownCommand`, common, "state", "", null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Start game with play name",
                de: "Spiel starten mit Spielnamen",
                ru: "Начало игры с именем игры",
                pt: "Comece o jogo com o nome do jogo",
                nl: "Start spel met afspeelnaam",
                fr: "Démarrer le jeu avec le nom du jeu",
                it: "Iniziare gioco con il nome di gioco",
                es: "Juego de inicio con nombre de juego",
                pl: "Rozpocznij grę z nazwą gry",
                uk: "Початок гри з ім'ям відтворення",
                "zh-cn": "以游戏名称开始游戏",
            },
            desc: "Start game with play name",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.remote.startGame`, common, "state", "", null);
    },
    /**
     * @param {string} ident
     * @param {object} common
     * @param {string} types
     * @param {string|number|boolean|null|undefined} value
     * @param {object|null|undefined} [native=null]
     */
    async createDataPoint(ident, common, types, value, native) {
        try {
            const nativvalue = !native ? { native: {} } : { native: native };
            const obj = await this.getObjectAsync(ident);
            if (!obj) {
                await this.setObjectNotExistsAsync(ident, {
                    type: types,
                    common: common,
                    ...nativvalue,
                }).catch(error => {
                    this.log.warn(`createDataPoint: ${error}`);
                });
            } else {
                let ischange = false;
                if (Object.keys(obj.common).length == Object.keys(common).length) {
                    for (const key in common) {
                        if (obj.common[key] == null) {
                            ischange = true;
                            break;
                        } else if (JSON.stringify(obj.common[key]) != JSON.stringify(common[key])) {
                            ischange = true;
                            break;
                        }
                    }
                } else {
                    ischange = true;
                }
                if (JSON.stringify(obj.type) != JSON.stringify(types)) {
                    ischange = true;
                }
                if (native) {
                    if (Object.keys(obj.native).length == Object.keys(nativvalue.native).length) {
                        for (const key in obj.native) {
                            if (nativvalue.native[key] == null) {
                                ischange = true;
                                delete obj["native"];
                                obj["native"] = native;
                                break;
                            } else if (JSON.stringify(obj.native[key]) != JSON.stringify(nativvalue.native[key])) {
                                ischange = true;
                                obj.native[key] = nativvalue.native[key];
                                break;
                            }
                        }
                    } else {
                        ischange = true;
                    }
                }
                if (ischange) {
                    this.log.debug(`INFORMATION - Change common: ${this.namespace}.${ident}`);
                    delete obj["common"];
                    obj["common"] = common;
                    obj["type"] = types;
                    await this.setObjectAsync(ident, obj);
                }
            }
            if (value != null) {
                await this.setStateAsync(ident, value, true);
            }
        } catch (error) {
            this.log.warn(`createDataPoint e: ${error}`);
        }
    },
};
