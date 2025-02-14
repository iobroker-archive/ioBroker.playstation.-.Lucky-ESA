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
            icon: "img/user.png",
        };
        await this.createDataPoint(`profile_remote_profile`, common, "channel", null, null);
        common = {
            name: {
                en: "Groups remote control",
                de: "Gruppen Fernbedienung",
                ru: "Удаленный контроль групп",
                pt: "Grupos de controle remoto",
                nl: "Groepen afstandsbediening",
                fr: "Télécommande des groupes",
                it: "Gruppi telecomando",
                es: "Control remoto de grupos",
                pl: "Grupy zdalnego sterowania",
                uk: "Групи дистанційного керування",
                "zh-cn": "组远程控制",
            },
            desc: "Groups remote control",
            icon: "img/group.png",
        };
        await this.createDataPoint(`profile_remote_groups`, common, "channel", null, null);
        common = {
            name: {
                en: "Trophies remote control",
                de: "Trophäen Fernbedienung",
                ru: "Дистанционное управление трофеями",
                pt: "Controle remoto de troféus",
                nl: "Trofeeën afstandsbediening",
                fr: "Trophies télécommande",
                it: "Trofei telecomando",
                es: "Control remoto de trofeos",
                pl: "Zdalne sterowanie trofeami",
                uk: "Трофей дистанційного керування",
                "zh-cn": "Trophies 远程控制",
            },
            desc: "Trophies remote control",
            icon: "img/trophy.png",
        };
        await this.createDataPoint(`profile_remote_trophies`, common, "channel", null, null);
        common = {
            type: "number",
            role: "value",
            name: {
                en: "Limit for groups",
                de: "Limit für Gruppen",
                ru: "Предел для групп",
                pt: "Limite de grupos",
                nl: "Maximumhoeveelheid voor groepen",
                fr: "Limite pour les groupes",
                it: "Limiti per gruppi",
                es: "Límite para grupos",
                pl: "Limit dla grup",
                uk: "Ліміт для груп",
                "zh-cn": "对组的限制",
            },
            desc: "Limit for groups",
            read: true,
            write: true,
            def: 100,
        };
        await this.createDataPoint(`profile_remote_groups.limit`, common, "state", null, null);
        common = {
            type: "number",
            role: "value",
            name: {
                en: "Start groups",
                de: "Startgruppen",
                ru: "Начальные группы",
                pt: "Grupos de início",
                nl: "Startgroepen",
                fr: "Groupes de démarrage",
                it: "Gruppi di avvio",
                es: "Grupos de inicio",
                pl: "Grupy startowe",
                uk: "Старт груп",
                "zh-cn": "启动组",
            },
            desc: "Start groups",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_groups.offset`, common, "state", null, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Favorites or no favorites",
                de: "Favoriten oder keine Favoriten",
                ru: "Любители или нет фаворитов",
                pt: "Favoritos ou sem favoritos",
                nl: "Favorieten of geen favorieten",
                fr: "Favoris ou pas de favoris",
                it: "Preferiti o no preferiti",
                es: "Favoritos o no favoritos",
                pl: "Ulubione lub nie ulubione",
                uk: "Вибрані або не улюблені",
                "zh-cn": "喜欢还是不喜欢",
            },
            desc: "Favorites or no favorites",
            read: true,
            write: true,
            def: "notFavorite",
            states: ["notFavorite", "favorite"],
        };
        await this.createDataPoint(`profile_remote_groups.favorite`, common, "state", null, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Which fields should be loaded",
                de: "Welche Felder sollten geladen werden",
                ru: "Какие поля должны быть загружены",
                pt: "Quais campos devem ser carregados",
                nl: "Welke velden moeten worden geladen",
                fr: "Quels champs doivent être chargés",
                it: "Quali campi dovrebbero essere caricati",
                es: "Que campos deben ser cargados",
                pl: "Które pola powinny być załadowane",
                uk: "Які поля повинні бути завантажені",
                "zh-cn": "装入哪个字段",
            },
            desc: "Which fields should be loaded",
            read: true,
            write: true,
            def: "groupName,groupIcon,members,mainThread,joinedTimestamp,modifiedTimestamp,totalGroupCount,isFavorite,existsNewArrival,partySessions",
        };
        await this.createDataPoint(`profile_remote_groups.fields`, common, "state", null, null);
        common = {
            type: "number",
            role: "value",
            name: {
                en: "Total groups",
                de: "Gesamtgruppen",
                ru: "Всего групп",
                pt: "Total dos grupos",
                nl: "Totaal groepen",
                fr: "Total des groupes",
                it: "Totale gruppi",
                es: "Total grupos",
                pl: "Grupy ogółem",
                uk: "Всього груп",
                "zh-cn": "群组共计",
            },
            desc: "Total groups",
            read: true,
            write: false,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_groups.total`, common, "state", 0, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Selecting a group",
                de: "Auswahl einer Gruppe",
                ru: "Выбор группы",
                pt: "Selecionando um grupo",
                nl: "Een groep selecteren",
                fr: "Sélection d'un groupe",
                it: "Selezione di un gruppo",
                es: "Selección de un grupo",
                pl: "Wybór grupy",
                uk: "Вибір групи",
                "zh-cn": "选择组合",
            },
            desc: "Selecting a group",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`profile_remote_groups.selectGroup`, common, "state", "", null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Group settings",
                de: "Gruppeneinstellungen",
                ru: "Параметры группы",
                pt: "Definições de grupo",
                nl: "Groepsinstellingen",
                fr: "Paramètres de groupe",
                it: "Impostazioni del gruppo",
                es: "Ajustes del grupo",
                pl: "Ustawienia grupy",
                uk: "Налаштування груп",
                "zh-cn": "组合设置",
            },
            desc: "Group settings",
            read: true,
            write: true,
            def: JSON.stringify({ groupName: { value: "group_name" } }),
        };
        await this.createDataPoint(`profile_remote_groups.groupSettings`, common, "state", null, null);
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
        await this.createDataPoint(`profile_remote_groups.result`, common, "state", "", null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Invite members to a group (selected in selectGroup)",
                de: "Mitglieder einer Gruppe einladen (ausgewählt in selectGroup)",
                ru: "Приглашать членов в группу (выбрано в избранной группе)",
                pt: "Convide membros para um grupo (selecionado em selectGroup)",
                nl: "Leden uitnodigen voor een groep (geselecteerd in geselecteerde groep)",
                fr: "Inviter les membres d'un groupe (sélectionnés dans le groupe sélectionné)",
                it: "Invita i membri a un gruppo (selezionato in selectGroup)",
                es: "Invitar miembros a un grupo (seleccionado en selectGroup)",
                pl: "Zaproś członków do grupy (wybranej w selectGroup)",
                uk: "Запрошення членів до групи (вибрано у вибраній групі)",
                "zh-cn": "邀请成员参加一个小组(在选定的小组中选定)",
            },
            desc: "Invite members to a group (selected in selectGroup)",
            read: true,
            write: true,
            def: '["0000000000000001", "0000000000000002"]',
        };
        await this.createDataPoint(`profile_remote_groups.inviteMembers`, common, "state", null, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Create a group with members",
                de: "Eine Gruppe mit Mitgliedern erstellen",
                ru: "Создание группы с членами",
                pt: "Criar um grupo com membros",
                nl: "Een groep aanmaken met leden",
                fr: "Créer un groupe avec des membres",
                it: "Crea un gruppo con i membri",
                es: "Crear un grupo con miembros",
                pl: "Utwórz grupę z członkami",
                uk: "Створення групи з членами",
                "zh-cn": "创建一个成员组",
            },
            desc: "Create a group with members",
            read: true,
            write: true,
            def: '["0000000000000001", "0000000000000002"]',
        };
        await this.createDataPoint(`profile_remote_groups.createGroup`, common, "state", null, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Load attachments from messages (raw data)",
                de: "Anhänge von Nachrichten laden (Rohdaten)",
                ru: "Загрузить вложения из сообщений (обычные данные)",
                pt: "Carregar anexos de mensagens (dados de rastreamento)",
                nl: "Bijlagen uit berichten laden (raw data)",
                fr: "Charger les pièces jointes des messages (données brutes)",
                it: "Caricare gli allegati dai messaggi (dati bassi)",
                es: "Cargar adjuntos de mensajes (datos de rocío)",
                pl: "Wczytaj załączniki z wiadomości (dane surowe)",
                uk: "Завантаження вкладення з повідомлень (відведення даних)",
                "zh-cn": "从信件装入附件( 原始数据)",
            },
            desc: "Load attachments from messages (raw data)",
            read: true,
            write: true,
            def: JSON.stringify(["<groupId>", "<resourceId>", "<messageType>", "<saveInMeta>"]),
        };
        await this.createDataPoint(
            `profile_remote_groups.loadFileData`,
            common,
            "state",
            JSON.stringify(["<groupId>", "<resourceId>", "<messageType>", "<saveInMeta>"]),
            null,
        );
        common = {
            type: "number",
            role: "value",
            name: {
                en: "Kick member with account-id (selected in selectGroup)",
                de: "Kick-Mitglied mit Konto-ID (ausgewählt in selectGroup)",
                ru: "Член Kick с аккаунтом-id (выбран в SelectGroup)",
                pt: "Kick member with account-id (selecionado em selectGroup)",
                nl: "Kick-lid met account-id (geselecteerd in geselecteerde groep)",
                fr: "Kick membre avec compte-id (sélectionné dans selectGroup)",
                it: "Kick member con account-id (seletto in selectGroup)",
                es: "Miembro de Kick con cuenta-id (seleccionado en selectGroup)",
                pl: "Kick member with account- id (wybrany w selectGroup)",
                uk: "Kick учасник з обліковим записом",
                "zh-cn": "用账号踢成员( 在选中的组中)",
            },
            desc: "Kick member with account-id (selected in selectGroup)",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_groups.kickMember`, common, "state", 0, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Send a message to a group (selected in selectGroup)",
                de: "Eine Nachricht an eine Gruppe senden (ausgewählt in selectGroup)",
                ru: "Отправить сообщение группе (выбранной в SelectGroup)",
                pt: "Enviar mensagem para um grupo (selecionado em selectGroup)",
                nl: "Een bericht naar een groep sturen (geselecteerd in geselecteerde groep)",
                fr: "Envoyer un message à un groupe (sélectionné dans le groupe sélectionné)",
                it: "Invia un messaggio a un gruppo (selezionato in selectGroup)",
                es: "Enviar un mensaje a un grupo (seleccionado en selectGroup)",
                pl: "Wyślij wiadomość do grupy (wybranej w selectGroup)",
                uk: "Надсилання повідомлення групі (вибрано в selectGroup)",
                "zh-cn": "向一个组发送消息( 在选中的组中)",
            },
            desc: "Send a message to a group (selected in selectGroup)",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`profile_remote_groups.sendGroupMessage`, common, "state", "", null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Load groups",
                de: "Gruppen laden",
                ru: "Группы нагрузки",
                pt: "Grupos de carga",
                nl: "Laadgroepen",
                fr: "Groupes de chargement",
                it: "Gruppi di carico",
                es: "Grupos de carga",
                pl: "Grupy obciążenia",
                uk: "Групи товарів",
                "zh-cn": "装入组",
            },
            desc: "Load groups",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote_groups.loadGroups`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Leave group (selected in selectGroup)",
                de: "Blättergruppe (ausgewählt in selectGroup)",
                ru: "Группа отпусков (выбрана в SelectGroup)",
                pt: "Deixar grupo (selecionado em selectGroup)",
                nl: "Groep verlaten (geselecteerd in geselecteerde groep)",
                fr: "Groupe de départ (sélectionné dans le groupe sélectionné)",
                it: "Lascia il gruppo (selezionato in selectGroup)",
                es: "Grupo de hojas (seleccionado en selectGroup)",
                pl: "Grupa leave (wybrana w selectGroup)",
                uk: "Зворотній зв'язок",
                "zh-cn": "离开组( 在选定组中选中)",
            },
            desc: "Leave group (selected in selectGroup)",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote_groups.leaveGroup`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Load groups with message",
                de: "Gruppen mit Nachricht laden",
                ru: "Группы нагрузки с сообщением",
                pt: "Grupos de carga com mensagem",
                nl: "Groepen laden met bericht",
                fr: "Charger les groupes avec le message",
                it: "Gruppi di carico con messaggio",
                es: "Grupos de carga con mensaje",
                pl: "Wczytaj grupy z wiadomością",
                uk: "Навантаження груп з повідомленням",
                "zh-cn": "用信件装入组",
            },
            desc: "Load groups",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote_groups.loadGroups_with_message`, common, "state", false, null);
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
        await this.createDataPoint(`profile_remote_profile.limit`, common, "state", null, null);
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
        await this.createDataPoint(`profile_remote_profile.account_id`, common, "state", null, null);
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
        await this.createDataPoint(`profile_remote_profile.gameList`, common, "state", 0, null);
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
        await this.createDataPoint(`profile_remote_profile.gameTitle`, common, "state", "", null);
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
        await this.createDataPoint(`profile_remote_profile.online_id`, common, "state", "", null);
        common = {
            type: "mixed",
            role: "value",
            name: {
                en: "Status of a user who has set private in his profile - with account ID",
                de: "Status eines Benutzers, der in seinem Profil privat gesetzt hat - mit Konto-ID",
                ru: "Статус пользователя, который установил частный в своем профиле - с идентификатором учетной записи",
                pt: "Status de um usuário que tenha definido privado em seu perfil - com ID de conta",
                nl: "Status van een gebruiker die privé heeft ingesteld in zijn profiel - met account-ID",
                fr: "Statut d'un utilisateur qui a défini privé dans son profil - avec ID de compte",
                it: "Stato di un utente che ha impostato privato nel suo profilo - con ID account",
                es: "Estado de un usuario que se ha fijado en privado en su perfil - con cuenta ID",
                pl: "Status użytkownika, który ustawił prywatny profil - z identyfikatorem konta",
                uk: "Статус користувача, який встановив приватний профіль - з ідентифікатором облікового запису",
                "zh-cn": "已私自设置配置文件的用户身份 - 账户 ID",
            },
            desc: "Status of a user who has set private in his profile - with account ID",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_profile.presencesUser`, common, "state", 0, null);
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
        await this.createDataPoint(`profile_remote_trophies.trophy_all`, common, "state", "", null);
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
        await this.createDataPoint(`profile_remote_trophies.trophy_title`, common, "state", 0, null);
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
            `profile_remote_trophies.trophy_title_group`,
            common,
            "state",
            JSON.stringify(["<npCommunicationId>", "<platform>"]),
            null,
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
            `profile_remote_trophies.trophy_title_group_user`,
            common,
            "state",
            JSON.stringify(["<accountId>", "<npCommunicationId>", "<platform>"]),
            null,
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
            `profile_remote_trophies.trophies_for_title`,
            common,
            "state",
            JSON.stringify(["<npCommunicationId>", "<groupId>", "<platform>"]),
            null,
        );
        common = {
            type: "string",
            role: "json",
            name: {
                en: "Trophies with game help available for a Title with npCommunication-id",
                de: "Trophäen mit Spielhilfe für einen Titel mit npCommunication-id",
                ru: "Трофеи с игровой помощью доступны для заголовка с npCommunication-id",
                pt: "Troféus com ajuda de jogo disponível para um título com npCommunication-id",
                nl: "Trofeeën met spelhulp beschikbaar voor een titel met npCommunicatie-id",
                fr: "Trophées avec l'aide du jeu disponible pour un titre avec npCommunication-id",
                it: "Trofei con aiuto di gioco disponibile per un titolo con npCommunication-id",
                es: "Trofeos con ayuda de juego disponibles para un título con npCommunication-id",
                pl: "Trofea z pomocą gry dostępne dla tytułu z npCommunication- id",
                uk: "Трофії з ігровою допомогою доступні для Назва з npCommunication-id",
                "zh-cn": "NpCommunication- id 标题可用游戏帮助的 Trophies",
            },
            desc: "Trophies with game help available for a Title with npCommunication-id",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(
            `profile_remote_trophies.trophies_game_help_available_for_title`,
            common,
            "state",
            "",
            null,
        );
        common = {
            type: "string",
            role: "json",
            name: {
                en: "Game Help for a trophy with npCommunication-Id, trophy-Id, udsObjectId and helpType-id",
                de: "Spiel Hilfe für eine Trophäe mit npCommunication-Id, trophy-Id, udsObjectId und helpType-id",
                ru: "Игра Помощь для трофеев с npCommunication-Id, трофей-Id, udsObjectId и помощьType-id",
                pt: "Ajuda do jogo para um troféu com npCommunication-Id, trophy-Id, udsObjectId e helpType-id",
                nl: "Spel Help voor een trofee met npCommunicatie-Id, trofee-Id, udsObjectId en helpType-id",
                fr: "Aide pour un trophée avec npCommunication-Id, trophée-Id, udsObjectId et helpType-id",
                it: "Aiuto per un trofeo con npCommunication-Id, trophy-Id, udsObjectId e helpType-id",
                es: "Ayuda de juego para un trofeo con npCommunication-Id, trofeo-Id, udsObjectId y ayudaType-id",
                pl: "Pomoc dla trofeum z npCommunication- Id, trophy- Id, udsObjectId i helpType- id",
                uk: "Гра Допомога для трофії з npCommunication-Id, trophy-Id, udsObjectId і допомогтиType-id",
                "zh-cn": "NpCommunication-Id的奖杯游戏帮助,奖杯-Id,udsObjectId和帮助Type-id",
            },
            desc: "Game Help for a trophy with npCommunication-Id, trophy-Id, udsObjectId and helpType-id",
            read: true,
            write: true,
            def: JSON.stringify(["<npCommunicationId>", "<trophyId>", "<udsObjectId>", "<helpType>"]),
        };
        await this.createDataPoint(
            `profile_remote_trophies.trophies_game_help_for_title`,
            common,
            "state",
            JSON.stringify(["<npCommunicationId>", "<trophyId>", "<udsObjectId>", "<helpType>"]),
            null,
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
            `profile_remote_trophies.trophies_earned_for_title`,
            common,
            "state",
            JSON.stringify(["<accountId>", "<npCommunicationId>", "<groupId>", "<platform>"]),
            null,
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
        await this.createDataPoint(`profile_remote_profile.result`, common, "state", "", null);
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
        await this.createDataPoint(`profile_remote_trophies.result`, common, "state", "", null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Search user with online ID",
                de: "Suche Benutzer mit Online-ID",
                ru: "Поиск пользователя с онлайн-идентификацией",
                pt: "Pesquisa usuário com ID online",
                nl: "Zoeken gebruiker met online ID",
                fr: "Recherche utilisateur avec ID en ligne",
                it: "Ricerca utente con ID online",
                es: "Usuario de búsqueda con ID en línea",
                pl: "Użytkownik wyszukiwania z identyfikatorem online",
                uk: "Пошук користувачів з онлайн ID",
                "zh-cn": "使用在线ID搜索用户",
            },
            desc: "Search user with online ID",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`profile_remote_profile.search_user`, common, "state", "", null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Search game with game name",
                de: "Suche Spiel mit Spielnamen",
                ru: "Поиск игры с именем игры",
                pt: "Pesquisar jogo com nome de jogo",
                nl: "Zoekspel met spelnaam",
                fr: "Jeu de recherche avec nom de jeu",
                it: "Gioco di ricerca con nome di gioco",
                es: "Buscar juego con nombre del juego",
                pl: "Wyszukiwanie gry z nazwą gry",
                uk: "Пошук гри з ім'ям гри",
                "zh-cn": "以游戏名称搜索游戏",
            },
            desc: "Search game with game name",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`profile_remote_profile.search_game`, common, "state", "", null);
        common = {
            type: "mixed",
            role: "value",
            name: {
                en: "Share profile with a friend (Account ID). A link to a QRcode is created.",
                de: "Profil mit einem Freund teilen (Account ID). Es wird ein Link zu einem QRcode erstellt.",
                ru: "Поделитесь профилем с другом (Account ID). Создается ссылка на QRcode.",
                pt: "Compartilhar perfil com um amigo (Account ID). Um link para um QRcode é criado.",
                nl: "Profiel delen met een vriend (Account ID). Een link naar een QRcode wordt aangemaakt.",
                fr: "Partager un profil avec un ami (identifiant de compte). Un lien vers un QRcode est créé.",
                it: "Condividere il profilo con un amico (Account ID). Viene creato un link a un QRcode.",
                es: "Compartir perfil con un amigo (ID de cuenta). Se crea un enlace a un código QRcode.",
                pl: "Podziel się profilem z przyjacielem (ID konta). Powstaje link do kodu QRCode.",
                uk: "Профіль спільного з другом Створено посилання на QR-код.",
                "zh-cn": "与朋友共享配置( 账户 ID) 。 创建了QRcode的链接.",
            },
            desc: "Share profile with a friend (Account ID). A link to a QRcode is created.",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_profile.shareProfile`, common, "state", 0, null);
        common = {
            type: "number",
            role: "value",
            name: {
                en: "Starting lists",
                de: "Startlisten",
                ru: "Запускные списки",
                pt: "Listas de início",
                nl: "Startlijsten",
                fr: "Listes de démarrage",
                it: "Elenco di partenza",
                es: "Listas de inicio",
                pl: "Listy startowe",
                uk: "Стартові списки",
                "zh-cn": "开始列表",
            },
            desc: "Starting lists",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_profile.offset`, common, "state", null, null);
        common = {
            type: "number",
            role: "value",
            name: {
                en: "Total",
                de: "Insgesamt",
                ru: "Итого",
                pt: "Total",
                nl: "Totaal",
                fr: "Total général",
                it: "Totale",
                es: "Total",
                pl: "Razem",
                uk: "Всього",
                "zh-cn": "共计",
            },
            desc: "Total",
            read: true,
            write: false,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_profile.total`, common, "state", 0, null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Search result",
                de: "Suchergebnis",
                ru: "Результат поиска",
                pt: "Resultado da pesquisa",
                nl: "Zoekresultaat",
                fr: "Résultat de la recherche",
                it: "Risultati ricerca",
                es: "Resultado de la búsqueda",
                pl: "Wynik wyszukiwania",
                uk: "Результат пошуку",
                "zh-cn": "搜索结果",
            },
            desc: "Search result",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`profile_remote_profile.search_result`, common, "state", "", null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Next page of search results",
                de: "Nächste Seite der Suchergebnisse",
                ru: "Следующая страница результатов поиска",
                pt: "Próxima página de resultados de pesquisa",
                nl: "Volgende pagina van zoekresultaten",
                fr: "Page suivante des résultats de recherche",
                it: "Pagina successiva dei risultati di ricerca",
                es: "Siguiente página de resultados de búsqueda",
                pl: "Następna strona wyników wyszukiwania",
                uk: "Наступна сторінка результатів пошуку",
                "zh-cn": "搜索结果的下一页",
            },
            desc: "Next page of search results",
            read: true,
            write: true,
            def: "",
        };
        await this.createDataPoint(`profile_remote_profile.search_result_pagination`, common, "state", "", null);
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
        await this.createDataPoint(`profile_remote_profile.friends_without_name`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "PlayStation Store wishlist",
                de: "PlayStation Auf den Wunschzettel",
                ru: "PlayStation Список желаний",
                pt: "PlayStation Lista de desejos da loja",
                nl: "PlayStation Wishlist opslaan",
                fr: "PlayStation Liste de souhaits",
                it: "PlayStation Lista dei desideri",
                es: "PlayStation Lista de deseos de la tienda",
                pl: "PlayStation Przechowuj listę życzeń",
                uk: "Кошик Список побажань магазину",
                "zh-cn": "游戏Station 存储愿望列表",
            },
            desc: "PlayStation Store wishlist",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote_profile.storeWishlist`, common, "state", false, null);
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
        await this.createDataPoint(`profile_remote_profile.friends_with_name`, common, "state", false, null);
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
        await this.createDataPoint(`profile_remote_profile.friends_with_name_status`, common, "state", false, null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: " User list received requests without name",
                de: "Benutzerliste empfangene Anfragen ohne Namen",
                ru: "Список пользователей получил запросы без имени",
                pt: "Lista de usuários recebeu pedidos sem nome",
                nl: "Gebruikerslijst ontvangen verzoeken zonder naam",
                fr: "Liste des utilisateurs reçus des demandes sans nom",
                it: "Elenco utenti ricevuti richieste senza nome",
                es: "Lista de usuarios recibidas solicitudes sin nombre",
                pl: "Lista użytkowników otrzymanych wniosków bez nazwy",
                uk: "Список користувачів отримав запити без назви",
                "zh-cn": "用户列表收到无名称请求",
            },
            desc: "User list received requests without name",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(
            `profile_remote_profile.received_requests_without_name`,
            common,
            "state",
            false,
            null,
        );
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: " User list received requests with name",
                de: "Benutzerliste empfangene Anfragen mit Namen",
                ru: "Список пользователей получил запросы с именем",
                pt: "Lista de usuários recebeu pedidos com nome",
                nl: "Gebruikerslijst ontvangen verzoeken met naam",
                fr: "Liste des utilisateurs reçus des demandes avec nom",
                it: "Elenco utenti ricevuti richieste con il nome",
                es: "Lista de usuarios recibidas solicitudes con nombre",
                pl: "Lista użytkowników otrzymywanych wniosków z nazwą",
                uk: "Список користувачів отримав запити з назвою",
                "zh-cn": "用户列表收到名称请求",
            },
            desc: "User list received requests with name",
            read: true,
            write: true,
            def: false,
        };
        await this.createDataPoint(`profile_remote_profile.received_requests_with_name`, common, "state", false, null);
        common = {
            type: "mixed",
            role: "value",
            name: {
                en: "Friend request accept (with account-id)",
                de: "Freundschaftsanfrage akzeptieren (mit Konto-ID)",
                ru: "Запрос друзей принимает (с аккаунтом-id)",
                pt: "Pedido do amigo aceita (com conta-id)",
                nl: "Vriend verzoek accepteren (met account-id)",
                fr: "Demande ami acceptée (avec compte-id)",
                it: "Richiesta di amico accetta (con account-id)",
                es: "Solicitud de amigo acepta (con cuenta-id)",
                pl: "Zaproszenie znajomego akceptuj (z account- id)",
                uk: "Заява на прийом (з обліковим записом)",
                "zh-cn": "朋友请求接受( 用账号)",
            },
            desc: "Friend request accept (with account-id)",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_profile.received_requests_accept`, common, "state", 0, null);
        common = {
            type: "mixed",
            role: "value",
            name: {
                en: "Friend request reject or friend delete (with account-id)",
                de: "Freundschaftsanfrage ablehnen oder Freund löschen (mit Konto-ID)",
                ru: "Отклонить или удалить друг (с аккаунтом-id)",
                pt: "Pedido de amigo rejeitado ou amigo excluir (com conta-id)",
                nl: "Vriend verzoek weigeren of vriend verwijderen (met account-id)",
                fr: "Demande ami rejet ou ami supprimer (avec compte-id)",
                it: "Invia richiesta rifiutare o amico cancellare (con account-id)",
                es: "Solicitud de amigo rechazar o amigo eliminar (con cuenta-id)",
                pl: "Zapytanie znajomego odrzucić lub przyjaciel usunąć (z account- id)",
                uk: "Відхилити один запит або видалити друг (з обліковим записом)",
                "zh-cn": "朋友请求拒绝或朋友删除( 带有账号)",
            },
            desc: "Friend request reject or friend delete (with account-id)",
            read: true,
            write: true,
            def: 0,
        };
        await this.createDataPoint(`profile_remote_profile.received_requests_reject`, common, "state", 0, null);
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
        await this.createDataPoint(`profile_remote_profile.blocked_without_name`, common, "state", false, null);
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
        await this.createDataPoint(`profile_remote_profile.blocked_with_name`, common, "state", false, null);
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
        await this.createDataPoint(`profile_remote_profile.online_without_name`, common, "state", false, null);
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
        await this.createDataPoint(`profile_remote_profile.online_with_name`, common, "state", false, null);
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
        await this.createDataPoint(`profile_remote_profile.update_profile`, common, "state", false, null);
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
        await this.createDataPoint(`${id.dp}.online`, common, "state", false, null);
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
                en: "Running app name",
                de: "Name der laufenden App",
                ru: "Запускное имя приложения",
                pt: "Nome do aplicativo em execução",
                nl: "Uitvoeren van app-naam",
                fr: "Nom de l'application",
                it: "Nome dell'applicazione in esecuzione",
                es: "Nombre de la aplicación",
                pl: "Uruchomienie nazwy aplikacji",
                uk: "Назва додатка",
                "zh-cn": "运行应用程序名称",
            },
            desc: "Running app name",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.device.running_app_name`, common, "state", "", null);
        common = {
            type: "string",
            role: "state",
            name: {
                en: "Running app title-id",
                de: "Laufende App Titel-ID",
                ru: "Running app title-id",
                pt: "Executar o título do aplicativo",
                nl: "Uitvoeren van app titel-id",
                fr: "Exécution de l'application title-id",
                it: "Running app title-id",
                es: "Running app title-id",
                pl: "Uruchomienie programu title- id",
                uk: "Заголовок програми",
                "zh-cn": "运行应用程序标题代号",
            },
            desc: "Running app title-id",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.device.running_app_titleId`, common, "state", "", null);
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
