const gitData = [

    // =============================================
    // --- SEKCIA: KONFIGURÁCIA ---
    // =============================================
    {
        command: "",
        comment: "Konfigurácia Gitu",
        vars: [],
        icon: "fa-solid fa-gear",
        color: "#f05133",
        category: "git",
        tags: "konfigurácia nastavenie config"
    },
    {
        command: "git config --global user.name",
        comment: "// Nastaví meno autora pre všetky repozitáre na počítači",
        vars: ["git config --global user.name 'Ján Novák'"],
        category: "git",
        tags: "konfigurácia meno autor"
    },
    {
        command: "git config --global user.email",
        comment: "// Nastaví email autora pre všetky repozitáre",
        vars: ["git config --global user.email 'jan@email.sk'"],
        category: "git",
        tags: "konfigurácia email"
    },
    {
        command: "git config --global core.editor",
        comment: "// Nastaví predvolený textový editor pre Git správy",
        vars: ["git config --global core.editor 'code --wait'", "git config --global core.editor 'vim'"],
        category: "git",
        tags: "konfigurácia editor"
    },
    {
        command: "git config --global init.defaultBranch",
        comment: "// Nastaví predvolený názov hlavnej vetvy (namiesto master)",
        vars: ["git config --global init.defaultBranch main"],
        category: "git",
        tags: "konfigurácia vetva"
    },
    {
        command: "git config --global core.autocrlf",
        comment: "// Automatická konverzia konca riadkov (Windows: true, Mac/Linux: input)",
        vars: ["git config --global core.autocrlf true", "git config --global core.autocrlf input"],
        category: "git",
        tags: "konfigurácia riadky"
    },
    {
        command: "git config --global alias.<skratka>",
        comment: "// Vytvorí vlastnú skratku (alias) pre Git príkaz",
        vars: ["git config --global alias.st status", "git config --global alias.lg 'log --oneline --graph'"],
        category: "git",
        tags: "konfigurácia alias skratka"
    },
    {
        command: "git config --list",
        comment: "// Zobrazí všetky aktuálne nastavenia Gitu",
        vars: ["git config --list", "git config --list --global", "git config user.name"],
        category: "git",
        tags: "konfigurácia zoznam"
    },
    {
        command: "git config --global --unset",
        comment: "// Odstráni konkrétne globálne nastavenie",
        vars: ["git config --global --unset user.email"],
        category: "git",
        tags: "konfigurácia odstránenie"
    },

    // =============================================
    // --- SEKCIA: INICIALIZÁCIA A KLONOVANIE ---
    // =============================================
    {
        command: "",
        comment: "Inicializácia a klonovanie",
        vars: [],
        icon: "fa-solid fa-plus",
        color: "#3fb950",
        category: "git",
        tags: "init clone inicializácia klonovanie"
    },
    {
        command: "git init",
        comment: "// Vytvorí nový prázdny Git repozitár v aktuálnom adresári",
        vars: ["git init", "git init nazov-projektu"],
        category: "git",
        tags: "init nový repozitár"
    },
    {
        command: "git init --bare",
        comment: "// Vytvorí holý (bare) repozitár bez pracovného adresára (pre server)",
        vars: ["git init --bare projekt.git"],
        category: "git",
        tags: "init bare server"
    },
    {
        command: "git clone",
        comment: "// Stiahne kópiu vzdialenéo repozitára vrátane celej histórie",
        vars: ["git clone https://github.com/user/repo.git", "git clone git@github.com:user/repo.git"],
        category: "git",
        tags: "clone klonovanie"
    },
    {
        command: "git clone --depth",
        comment: "// Klonuje len posledných N commitov (shallow clone – rýchlejšie)",
        vars: ["git clone --depth 1 https://github.com/user/repo.git"],
        category: "git",
        tags: "clone shallow rýchle"
    },
    {
        command: "git clone --branch",
        comment: "// Klonuje konkrétnu vetvu alebo tag",
        vars: ["git clone --branch develop https://github.com/user/repo.git"],
        category: "git",
        tags: "clone vetva"
    },
    {
        command: "git clone --single-branch",
        comment: "// Klonuje len jednu vetvu (bez ostatných)",
        vars: ["git clone --single-branch --branch main https://github.com/user/repo.git"],
        category: "git",
        tags: "clone vetva jednoduchý"
    },

    // =============================================
    // --- SEKCIA: ZÁKLADNÉ OPERÁCIE ---
    // =============================================
    {
        command: "",
        comment: "Základné operácie (stage, commit)",
        vars: [],
        icon: "fa-solid fa-box-archive",
        color: "#e3b341",
        category: "git",
        tags: "add commit status základy staging"
    },
    {
        command: "git status",
        comment: "// Zobrazí stav pracovného adresára a staging area",
        vars: ["git status", "git status -s  // skrátený výstup", "git status -sb // skrátený s branchom"],
        category: "git",
        tags: "status stav"
    },
    {
        command: "git add",
        comment: "// Pridá zmeny do staging area (príprava na commit)",
        vars: ["git add subor.txt", "git add .", "git add -A  // všetky zmeny vrátane vymazaných", "git add src/"],
        category: "git",
        tags: "add staging pridanie"
    },
    {
        command: "git add -p",
        comment: "// Interaktívne pridávanie zmien po častiach (hunks)",
        vars: ["git add -p", "git add --patch"],
        category: "git",
        tags: "add interaktívne čiastočné"
    },
    {
        command: "git commit",
        comment: "// Uloží staging area ako nový commit (otvorí editor pre správu)",
        vars: ["git commit", "git commit -m 'Správa commitu'", "git commit -am 'Správa'  // add + commit naraz (len tracked súbory)"],
        category: "git",
        tags: "commit uloženie"
    },
    {
        command: "git commit --amend",
        comment: "// Upraví posledný commit (správu alebo obsah) – NE-pushnutý commit",
        vars: ["git commit --amend -m 'Opravená správa'", "git commit --amend --no-edit  // zachová pôvodnú správu"],
        category: "git",
        tags: "commit úprava"
    },
    {
        command: "git commit --allow-empty",
        comment: "// Commit bez zmien (napr. na spustenie CI/CD pipeline)",
        vars: ["git commit --allow-empty -m 'Trigger CI'"],
        category: "git",
        tags: "commit prázdny"
    },
    {
        command: "git restore",
        comment: "// Zahodí zmeny v pracovnom adresári (revert súboru na posledný commit)",
        vars: ["git restore subor.txt", "git restore .  // všetky súbory"],
        category: "git",
        tags: "restore zahodenie zmeny"
    },
    {
        command: "git restore --staged",
        comment: "// Odstráni súbor zo staging area (späť do working directory)",
        vars: ["git restore --staged subor.txt", "git restore --staged ."],
        category: "git",
        tags: "restore unstage"
    },
    {
        command: "git rm",
        comment: "// Vymaže súbor z repozitára aj z disku",
        vars: ["git rm subor.txt", "git rm -r adresar/"],
        category: "git",
        tags: "rm vymazanie súbor"
    },
    {
        command: "git rm --cached",
        comment: "// Prestane sledovať súbor (zachová ho na disku, vymaže z Gitu)",
        vars: ["git rm --cached subor.txt", "git rm --cached -r adresar/"],
        category: "git",
        tags: "rm untrack prestať sledovať"
    },
    {
        command: "git mv",
        comment: "// Premenuje alebo presunie súbor (sleduje ho Git)",
        vars: ["git mv stary.txt novy.txt", "git mv subor.txt src/subor.txt"],
        category: "git",
        tags: "mv premenovanie presun"
    },
    {
        command: "git clean",
        comment: "// Vymaže nesledované súbory z pracovného adresára",
        vars: ["git clean -f     // súbory", "git clean -fd    // súbory aj adresáre", "git clean -n     // zobraziť čo by sa vymazalo (dry run)", "git clean -fX    // len ignorované súbory (.gitignore)"],
        category: "git",
        tags: "clean vymazanie nesledované"
    },

    // =============================================
    // --- SEKCIA: HISTÓRIA A LOG ---
    // =============================================
    {
        command: "",
        comment: "História a log",
        vars: [],
        icon: "fa-solid fa-clock-rotate-left",
        color: "#58a6ff",
        category: "git",
        tags: "log história commity"
    },
    {
        command: "git log",
        comment: "// Zobrazí históriu commitov",
        vars: ["git log", "git log --oneline", "git log --oneline --graph --all", "git log -n 5  // posledných 5"],
        category: "git",
        tags: "log história"
    },
    {
        command: "git log --graph",
        comment: "// Vizuálny graf vetiev a mergov v terminali",
        vars: ["git log --graph --oneline --all --decorate"],
        category: "git",
        tags: "log graf vetvy"
    },
    {
        command: "git log --author",
        comment: "// Filtruje commity podľa autora",
        vars: ["git log --author='Ján'", "git log --author='jan@email.sk'"],
        category: "git",
        tags: "log filter autor"
    },
    {
        command: "git log --since / --until",
        comment: "// Filtruje commity podľa dátumu",
        vars: ["git log --since='2024-01-01'", "git log --since='2 weeks ago'", "git log --until='yesterday'"],
        category: "git",
        tags: "log filter dátum"
    },
    {
        command: "git log --grep",
        comment: "// Filtruje commity podľa kľúčového slova v správe",
        vars: ["git log --grep='fix'", "git log --grep='feat' --oneline"],
        category: "git",
        tags: "log filter hľadanie"
    },
    {
        command: "git log -S",
        comment: "// Nájde commity ktoré pridali alebo odobrali daný reťazec (pickaxe)",
        vars: ["git log -S 'nazovFunkcie'", "git log -S 'password' --all"],
        category: "git",
        tags: "log hľadanie kód"
    },
    {
        command: "git log --stat",
        comment: "// Zobrazí ktoré súbory boli zmenené v každom commite",
        vars: ["git log --stat", "git log --stat --oneline"],
        category: "git",
        tags: "log súbory zmeny"
    },
    {
        command: "git log -p",
        comment: "// Zobrazí celý diff každého commitu",
        vars: ["git log -p", "git log -p subor.txt  // len pre daný súbor"],
        category: "git",
        tags: "log diff zmeny"
    },
    {
        command: "git log --follow",
        comment: "// Sleduje históriu súboru cez premenovania",
        vars: ["git log --follow subor.txt"],
        category: "git",
        tags: "log história súbor premenovanie"
    },
    {
        command: "git show",
        comment: "// Zobrazí detaily konkrétneho commitu, tagu alebo objektu",
        vars: ["git show abc1234", "git show HEAD", "git show HEAD:subor.txt  // obsah súboru v commite"],
        category: "git",
        tags: "show detail commit"
    },
    {
        command: "git diff",
        comment: "// Zobrazí rozdiely medzi pracovným adresárom a staging area",
        vars: ["git diff", "git diff subor.txt"],
        category: "git",
        tags: "diff rozdiely zmeny"
    },
    {
        command: "git diff --staged",
        comment: "// Rozdiely medzi staging area a posledným commitom",
        vars: ["git diff --staged", "git diff --cached"],
        category: "git",
        tags: "diff staged rozdiely"
    },
    {
        command: "git diff <vetva1> <vetva2>",
        comment: "// Porovnanie dvoch vetiev, commitov alebo tagov",
        vars: ["git diff main develop", "git diff HEAD~3 HEAD", "git diff abc123 def456"],
        category: "git",
        tags: "diff porovnanie vetvy"
    },
    {
        command: "git blame",
        comment: "// Zobrazí kto a kedy napísal každý riadok súboru",
        vars: ["git blame subor.txt", "git blame -L 10,20 subor.txt  // len riadky 10-20"],
        category: "git",
        tags: "blame autor riadok"
    },
    {
        command: "git shortlog",
        comment: "// Zhrnutie commitov zoskupené podľa autora",
        vars: ["git shortlog", "git shortlog -sn  // počet commitov zostupne"],
        category: "git",
        tags: "log autor zhrnutie"
    },

    // =============================================
    // --- SEKCIA: VETVY (BRANCHES) ---
    // =============================================
    {
        command: "",
        comment: "Vetvy (Branches)",
        vars: [],
        icon: "fa-solid fa-code-branch",
        color: "#d2a8ff",
        category: "git",
        tags: "branch vetva vetvenie"
    },
    {
        command: "git branch",
        comment: "// Zobrazí lokálne vetvy (* = aktuálna)",
        vars: ["git branch", "git branch -a  // lokálne aj vzdialené", "git branch -v  // s posledným commitom"],
        category: "git",
        tags: "branch zoznam"
    },
    {
        command: "git branch <nazov>",
        comment: "// Vytvorí novú vetvu z aktuálnej pozície (neprepne na ňu)",
        vars: ["git branch feature/prihlasenie", "git branch hotfix/bug-123"],
        category: "git",
        tags: "branch vytvorenie"
    },
    {
        command: "git switch",
        comment: "// Prepne na existujúcu vetvu (moderná náhrada git checkout)",
        vars: ["git switch main", "git switch develop"],
        category: "git",
        tags: "switch prepnutie vetva"
    },
    {
        command: "git switch -c",
        comment: "// Vytvorí novú vetvu a hneď na ňu prepne",
        vars: ["git switch -c feature/nova-funkcia", "git switch -c hotfix/oprava origin/main"],
        category: "git",
        tags: "switch vytvorenie prepnutie"
    },
    {
        command: "git checkout",
        comment: "// Prepne vetvu alebo obnoví súbory (staršia syntax)",
        vars: ["git checkout main", "git checkout -b nova-vetva", "git checkout -- subor.txt"],
        category: "git",
        tags: "checkout prepnutie vetva"
    },
    {
        command: "git branch -d",
        comment: "// Vymaže vetvu (len ak je mergnutá – bezpečné)",
        vars: ["git branch -d feature/hotova-funkcia"],
        category: "git",
        tags: "branch vymazanie"
    },
    {
        command: "git branch -D",
        comment: "// Vynútene vymaže vetvu bez ohľadu na to či je mergnutá",
        vars: ["git branch -D feature/zrusena-funkcia"],
        category: "git",
        tags: "branch vymazanie vynútené"
    },
    {
        command: "git branch -m",
        comment: "// Premenuje vetvu",
        vars: ["git branch -m stary-nazov novy-nazov", "git branch -m novy-nazov  // premenuje aktuálnu vetvu"],
        category: "git",
        tags: "branch premenovanie"
    },
    {
        command: "git branch --merged / --no-merged",
        comment: "// Zobrazí vetvy ktoré sú / nie sú mergnuté do aktuálnej",
        vars: ["git branch --merged", "git branch --no-merged main"],
        category: "git",
        tags: "branch merge zoznam"
    },

    // =============================================
    // --- SEKCIA: MERGE A REBASE ---
    // =============================================
    {
        command: "",
        comment: "Merge a Rebase",
        vars: [],
        icon: "fa-solid fa-arrows-merge",
        color: "#f78166",
        category: "git",
        tags: "merge rebase zlúčenie prepísanie"
    },
    {
        command: "git merge",
        comment: "// Zlúči danú vetvu do aktuálnej vetvy (vytvorí merge commit)",
        vars: ["git merge feature/nova-funkcia", "git merge --no-ff feature/nova-funkcia  // vždy vytvorí merge commit"],
        category: "git",
        tags: "merge zlúčenie"
    },
    {
        command: "git merge --squash",
        comment: "// Zlúči všetky commity vetvy do jedného (necommituje automaticky)",
        vars: ["git merge --squash feature/nova-funkcia", "git commit -m 'feat: pridaná nová funkcia'"],
        category: "git",
        tags: "merge squash komprimácia"
    },
    {
        command: "git merge --abort",
        comment: "// Zruší prebiehajúci merge (pri konflikte)",
        vars: ["git merge --abort"],
        category: "git",
        tags: "merge zrušenie konflikt"
    },
    {
        command: "git merge --continue",
        comment: "// Pokračuje v merge po vyriešení konfliktov",
        vars: ["git merge --continue"],
        category: "git",
        tags: "merge pokračovanie konflikt"
    },
    {
        command: "git rebase",
        comment: "// Presadí commity aktuálnej vetvy na vrchol inej vetvy (čistejšia história)",
        vars: ["git rebase main", "git rebase origin/main"],
        category: "git",
        tags: "rebase história prepísanie"
    },
    {
        command: "git rebase -i",
        comment: "// Interaktívny rebase – úprava, zlúčenie, preskočenie commitov",
        vars: ["git rebase -i HEAD~3         // posledné 3 commity", "git rebase -i abc1234       // od daného commitu"],
        category: "git",
        tags: "rebase interaktívny úprava"
    },
    {
        command: "Príkazy v interaktívnom rebase",
        comment: "// Dostupné akcie pri git rebase -i",
        vars: ["pick    – zachová commit", "reword  – zmení správu commitu", "edit    – zastaví pre úpravu", "squash  – zlúči s predošlým (zachová správy)", "fixup   – zlúči s predošlým (zahodí správu)", "drop    – vymaže commit", "exec    – spustí shell príkaz"],
        category: "git",
        tags: "rebase interaktívny príkazy"
    },
    {
        command: "git rebase --abort",
        comment: "// Zruší prebiehajúci rebase",
        vars: ["git rebase --abort"],
        category: "git",
        tags: "rebase zrušenie"
    },
    {
        command: "git rebase --continue",
        comment: "// Pokračuje v rebase po vyriešení konfliktov",
        vars: ["git rebase --continue"],
        category: "git",
        tags: "rebase pokračovanie"
    },
    {
        command: "git rebase --skip",
        comment: "// Preskočí aktuálny konfliktný commit pri rebase",
        vars: ["git rebase --skip"],
        category: "git",
        tags: "rebase preskočenie"
    },
    {
        command: "git cherry-pick",
        comment: "// Aplikuje konkrétny commit z inej vetvy do aktuálnej",
        vars: ["git cherry-pick abc1234", "git cherry-pick abc1234 def5678  // viac commitov", "git cherry-pick main~2..main     // rozsah"],
        category: "git",
        tags: "cherry-pick výber commit"
    },
    {
        command: "git cherry-pick --no-commit",
        comment: "// Aplikuje zmeny bez automatického commitu",
        vars: ["git cherry-pick --no-commit abc1234"],
        category: "git",
        tags: "cherry-pick bez commitu"
    },

    // =============================================
    // --- SEKCIA: VZDIALENÉ REPOZITÁRE ---
    // =============================================
    {
        command: "",
        comment: "Vzdialené repozitáre (Remote)",
        vars: [],
        icon: "fa-solid fa-cloud",
        color: "#58a6ff",
        category: "git",
        tags: "remote origin push pull fetch vzdialený"
    },
    {
        command: "git remote -v",
        comment: "// Zobrazí zoznam vzdialených repozitárov s URL",
        vars: ["git remote -v"],
        category: "git",
        tags: "remote zoznam"
    },
    {
        command: "git remote add",
        comment: "// Pridá odkaz na vzdialený repozitár",
        vars: ["git remote add origin https://github.com/user/repo.git", "git remote add upstream https://github.com/orig/repo.git"],
        category: "git",
        tags: "remote pridanie"
    },
    {
        command: "git remote remove",
        comment: "// Odstráni odkaz na vzdialený repozitár",
        vars: ["git remote remove origin"],
        category: "git",
        tags: "remote odstránenie"
    },
    {
        command: "git remote rename",
        comment: "// Premenuje vzdialený repozitár",
        vars: ["git remote rename origin zaloha"],
        category: "git",
        tags: "remote premenovanie"
    },
    {
        command: "git remote set-url",
        comment: "// Zmení URL vzdialeného repozitára",
        vars: ["git remote set-url origin git@github.com:user/repo.git"],
        category: "git",
        tags: "remote URL zmena"
    },
    {
        command: "git fetch",
        comment: "// Stiahne zmeny zo vzdialeného repozitára BEZ automatického mergu",
        vars: ["git fetch origin", "git fetch --all  // všetky vzdialené", "git fetch origin main"],
        category: "git",
        tags: "fetch stiahnutie"
    },
    {
        command: "git fetch --prune",
        comment: "// Stiahne a zároveň vymaže lokálne sledovacie vetvy ktoré zanikli na remonte",
        vars: ["git fetch --prune", "git fetch -p"],
        category: "git",
        tags: "fetch prune čistenie"
    },
    {
        command: "git pull",
        comment: "// Stiahne zmeny a hneď ich zlúči (fetch + merge)",
        vars: ["git pull", "git pull origin main"],
        category: "git",
        tags: "pull stiahnutie merge"
    },
    {
        command: "git pull --rebase",
        comment: "// Stiahne zmeny a aplikuje ich cez rebase (čistejšia história ako merge)",
        vars: ["git pull --rebase", "git pull --rebase origin main"],
        category: "git",
        tags: "pull rebase"
    },
    {
        command: "git push",
        comment: "// Odošle lokálne commity na vzdialený repozitár",
        vars: ["git push", "git push origin main", "git push origin feature/nova-funkcia"],
        category: "git",
        tags: "push odoslanie"
    },
    {
        command: "git push -u origin",
        comment: "// Prvý push novej vetvy – nastaví tracking (potom stačí git push)",
        vars: ["git push -u origin main", "git push --set-upstream origin feature/nova"],
        category: "git",
        tags: "push tracking upstream"
    },
    {
        command: "git push --force-with-lease",
        comment: "// Bezpečný force push – zlyhá ak niekto iný pushol od tvojho posledného fetch",
        vars: ["git push --force-with-lease"],
        category: "git",
        tags: "push force bezpečný"
    },
    {
        command: "git push --force",
        comment: "// Vynútene prepíše vzdialenú históriu – POZOR, deštruktívne!",
        vars: ["git push --force", "git push -f origin main"],
        category: "git",
        tags: "push force vynútené"
    },
    {
        command: "git push origin --delete",
        comment: "// Vymaže vetvu na vzdialenom repozitári",
        vars: ["git push origin --delete feature/stara-vetva", "git push origin :stara-vetva  // starší syntax"],
        category: "git",
        tags: "push delete vymazanie vetva"
    },
    {
        command: "git push --tags",
        comment: "// Odošle všetky lokálne tagy na vzdialený repozitár",
        vars: ["git push --tags", "git push origin v1.0.0  // konkrétny tag"],
        category: "git",
        tags: "push tagy"
    },

    // =============================================
    // --- SEKCIA: TAGY ---
    // =============================================
    {
        command: "",
        comment: "Tagy (Tags)",
        vars: [],
        icon: "fa-solid fa-tag",
        color: "#e3b341",
        category: "git",
        tags: "tag verzia release"
    },
    {
        command: "git tag",
        comment: "// Zobrazí zoznam všetkých tagov",
        vars: ["git tag", "git tag -l 'v1.*'  // filtruje podľa vzoru"],
        category: "git",
        tags: "tag zoznam"
    },
    {
        command: "git tag <nazov>",
        comment: "// Vytvorí jednoduchý (lightweight) tag na aktuálnom commite",
        vars: ["git tag v1.0.0", "git tag v1.0.0 abc1234  // na konkrétnom commite"],
        category: "git",
        tags: "tag vytvorenie lightweight"
    },
    {
        command: "git tag -a",
        comment: "// Vytvorí anotovaný tag so správou (odporúčané pre release)",
        vars: ["git tag -a v1.0.0 -m 'Verzia 1.0.0'", "git tag -a v1.0.0 abc1234 -m 'Verzia 1.0.0'"],
        category: "git",
        tags: "tag anotovaný release"
    },
    {
        command: "git tag -d",
        comment: "// Vymaže lokálny tag",
        vars: ["git tag -d v1.0.0"],
        category: "git",
        tags: "tag vymazanie"
    },
    {
        command: "git show <tag>",
        comment: "// Zobrazí detaily tagu a commitu na ktorý ukazuje",
        vars: ["git show v1.0.0"],
        category: "git",
        tags: "tag detail"
    },
    {
        command: "git describe",
        comment: "// Popíše aktuálnu pozíciu relatívne k najbližšiemu tagu",
        vars: ["git describe --tags", "git describe --always"],
        category: "git",
        tags: "tag popis verzia"
    },

    // =============================================
    // --- SEKCIA: STASH ---
    // =============================================
    {
        command: "",
        comment: "Stash – dočasné uloženie zmien",
        vars: [],
        icon: "fa-solid fa-box",
        color: "#79c0ff",
        category: "git",
        tags: "stash dočasné uloženie zmeny"
    },
    {
        command: "git stash",
        comment: "// Dočasne uloží neuložené zmeny a vráti čistý working directory",
        vars: ["git stash", "git stash save 'Popis zmien'"],
        category: "git",
        tags: "stash uloženie"
    },
    {
        command: "git stash -u",
        comment: "// Stash vrátane nesledovaných (nových) súborov",
        vars: ["git stash -u", "git stash --include-untracked"],
        category: "git",
        tags: "stash nesledované"
    },
    {
        command: "git stash list",
        comment: "// Zobrazí zoznam všetkých stashov",
        vars: ["git stash list"],
        category: "git",
        tags: "stash zoznam"
    },
    {
        command: "git stash pop",
        comment: "// Obnoví posledný stash a vymaže ho zo zoznamu",
        vars: ["git stash pop", "git stash pop stash@{2}  // konkrétny stash"],
        category: "git",
        tags: "stash obnovenie vymazanie"
    },
    {
        command: "git stash apply",
        comment: "// Obnoví stash ale NEMAŽE ho zo zoznamu",
        vars: ["git stash apply", "git stash apply stash@{1}"],
        category: "git",
        tags: "stash obnovenie zachovanie"
    },
    {
        command: "git stash drop",
        comment: "// Vymaže konkrétny stash zo zoznamu",
        vars: ["git stash drop", "git stash drop stash@{1}"],
        category: "git",
        tags: "stash vymazanie"
    },
    {
        command: "git stash clear",
        comment: "// Vymaže VŠETKY stashe – nezvratné!",
        vars: ["git stash clear"],
        category: "git",
        tags: "stash vymazanie všetky"
    },
    {
        command: "git stash branch",
        comment: "// Vytvorí novú vetvu zo stashu a aplikuje ho",
        vars: ["git stash branch nova-vetva stash@{0}"],
        category: "git",
        tags: "stash vetva"
    },
    {
        command: "git stash show",
        comment: "// Zobrazí čo obsahuje stash",
        vars: ["git stash show", "git stash show -p  // s diffom"],
        category: "git",
        tags: "stash detail"
    },

    // =============================================
    // --- SEKCIA: RESET, REVERT A REFLOG ---
    // =============================================
    {
        command: "",
        comment: "Reset, Revert a Reflog",
        vars: [],
        icon: "fa-solid fa-arrow-rotate-left",
        color: "#f78166",
        category: "git",
        tags: "reset revert reflog oprava história"
    },
    {
        command: "git reset --soft",
        comment: "// Presunie HEAD na daný commit – zmeny ostanú v staging area",
        vars: ["git reset --soft HEAD~1  // vráti posledný commit do staging", "git reset --soft abc1234"],
        category: "git",
        tags: "reset soft staging"
    },
    {
        command: "git reset --mixed",
        comment: "// Presunie HEAD – zmeny ostanú v working directory (predvolené)",
        vars: ["git reset HEAD~1", "git reset --mixed abc1234"],
        category: "git",
        tags: "reset mixed working"
    },
    {
        command: "git reset --hard",
        comment: "// Presunie HEAD a ZAHODÍ všetky zmeny – DEŠTRUKTÍVNE!",
        vars: ["git reset --hard HEAD~1", "git reset --hard origin/main"],
        category: "git",
        tags: "reset hard zahodenie"
    },
    {
        command: "git revert",
        comment: "// Vytvorí nový commit ktorý ruší zmeny daného commitu (bezpečné!)",
        vars: ["git revert abc1234", "git revert HEAD  // zvráti posledný commit"],
        category: "git",
        tags: "revert zvrátiť bezpečné"
    },
    {
        command: "git revert --no-commit",
        comment: "// Aplikuje revert do staging area bez commitu",
        vars: ["git revert --no-commit abc1234"],
        category: "git",
        tags: "revert bez commitu"
    },
    {
        command: "git revert HEAD~3..HEAD",
        comment: "// Zvráti rozsah commitov naraz",
        vars: ["git revert HEAD~3..HEAD --no-commit", "git commit -m 'Revert posledné 3 commity'"],
        category: "git",
        tags: "revert rozsah"
    },
    {
        command: "git reflog",
        comment: "// Zobrazí históriu pohybov HEAD (záchranné lano pre reset --hard)",
        vars: ["git reflog", "git reflog show --all"],
        category: "git",
        tags: "reflog história záchrana"
    },
    {
        command: "git reflog + git reset",
        comment: "// Obnova commitu zmazaného cez git reset --hard",
        vars: ["git reflog                     // nájde stratený commit", "git reset --hard abc1234       // obnoví naň HEAD"],
        category: "git",
        tags: "reflog obnova záchrana"
    },

    // =============================================
    // --- SEKCIA: SUBMODULY ---
    // =============================================
    {
        command: "",
        comment: "Submoduly (Submodules)",
        vars: [],
        icon: "fa-solid fa-circle-nodes",
        color: "#d2a8ff",
        category: "git",
        tags: "submodule submodul závislosť"
    },
    {
        command: "git submodule add",
        comment: "// Pridá externý repozitár ako submodul",
        vars: ["git submodule add https://github.com/user/lib.git libs/lib", "git submodule add --branch main https://..."],
        category: "git",
        tags: "submodul pridanie"
    },
    {
        command: "git submodule init",
        comment: "// Inicializuje submoduly po klonovaní (registruje ich lokálne)",
        vars: ["git submodule init"],
        category: "git",
        tags: "submodul inicializácia"
    },
    {
        command: "git submodule update",
        comment: "// Stiahne obsah submodulov",
        vars: ["git submodule update", "git submodule update --init  // init + update v jednom", "git submodule update --init --recursive  // aj vnorené"],
        category: "git",
        tags: "submodul aktualizácia"
    },
    {
        command: "git clone --recurse-submodules",
        comment: "// Klonuje repozitár vrátane všetkých submodulov",
        vars: ["git clone --recurse-submodules https://github.com/user/repo.git"],
        category: "git",
        tags: "submodul clone"
    },
    {
        command: "git submodule foreach",
        comment: "// Spustí príkaz v každom submodule",
        vars: ["git submodule foreach git pull origin main", "git submodule foreach git status"],
        category: "git",
        tags: "submodul foreach"
    },
    {
        command: "git submodule status",
        comment: "// Zobrazí stav všetkých submodulov",
        vars: ["git submodule status"],
        category: "git",
        tags: "submodul stav"
    },

    // =============================================
    // --- SEKCIA: WORKTREE ---
    // =============================================
    {
        command: "",
        comment: "Worktree – viac pracovných adresárov",
        vars: [],
        icon: "fa-solid fa-folder-tree",
        color: "#3fb950",
        category: "git",
        tags: "worktree viac adresárov paralelné vetvy"
    },
    {
        command: "git worktree add",
        comment: "// Vytvorí nový pracovný adresár pre inú vetvu (bez stashu)",
        vars: ["git worktree add ../projekt-hotfix hotfix/bug-123", "git worktree add -b nova-vetva ../nova-cesta"],
        category: "git",
        tags: "worktree pridanie"
    },
    {
        command: "git worktree list",
        comment: "// Zobrazí všetky aktívne worktree",
        vars: ["git worktree list"],
        category: "git",
        tags: "worktree zoznam"
    },
    {
        command: "git worktree remove",
        comment: "// Odstráni worktree",
        vars: ["git worktree remove ../projekt-hotfix"],
        category: "git",
        tags: "worktree odstránenie"
    },

    // =============================================
    // --- SEKCIA: BISECT ---
    // =============================================
    {
        command: "",
        comment: "Bisect – hľadanie chybného commitu",
        vars: [],
        icon: "fa-solid fa-bug",
        color: "#f78166",
        category: "git",
        tags: "bisect debug chyba hľadanie"
    },
    {
        command: "git bisect start",
        comment: "// Spustí binárne vyhľadávanie chybného commitu",
        vars: ["git bisect start"],
        category: "git",
        tags: "bisect štart"
    },
    {
        command: "git bisect bad",
        comment: "// Označí aktuálny commit ako chybný",
        vars: ["git bisect bad", "git bisect bad abc1234"],
        category: "git",
        tags: "bisect zlý"
    },
    {
        command: "git bisect good",
        comment: "// Označí commit kde chyba ešte nebola",
        vars: ["git bisect good v1.0.0", "git bisect good abc1234"],
        category: "git",
        tags: "bisect dobrý"
    },
    {
        command: "git bisect reset",
        comment: "// Ukončí bisect a vráti HEAD na pôvodné miesto",
        vars: ["git bisect reset"],
        category: "git",
        tags: "bisect koniec reset"
    },
    {
        command: "git bisect run",
        comment: "// Automatizovaný bisect – skript vráti 0 (dobrý) alebo 1 (zlý)",
        vars: ["git bisect run npm test", "git bisect run ./test.sh"],
        category: "git",
        tags: "bisect automatický skript"
    },

    // =============================================
    // --- SEKCIA: GITIGNORE A ATRIBÚTY ---
    // =============================================
    {
        command: "",
        comment: ".gitignore a atribúty",
        vars: [],
        icon: "fa-solid fa-eye-slash",
        color: "#8b949e",
        category: "git",
        tags: "gitignore atribúty ignorovanie"
    },
    {
        command: ".gitignore",
        comment: "// Súbor so vzormi súborov ktoré Git nemá sledovať",
        vars: ["node_modules/", "*.log", ".env", "dist/", ".DS_Store", "*.pyc"],
        category: "git",
        tags: "gitignore ignorovanie"
    },
    {
        command: "Vzory v .gitignore",
        comment: "// Syntax pravidiel pre .gitignore",
        vars: ["*.log        – všetky .log súbory", "!important.log – výnimka (nevynechaj)", "adresar/     – celý adresár", "subor.txt    – konkrétny súbor", "**/log       – v ľubovoľnej podúrovni", "doc/*.txt    – len v priamom adresári"],
        category: "git",
        tags: "gitignore vzory syntax"
    },
    {
        command: "git check-ignore",
        comment: "// Overí prečo je súbor ignorovaný",
        vars: ["git check-ignore -v subor.txt"],
        category: "git",
        tags: "gitignore kontrola"
    },
    {
        command: "git ls-files --ignored",
        comment: "// Zobrazí všetky ignorované súbory",
        vars: ["git ls-files --ignored --exclude-standard"],
        category: "git",
        tags: "gitignore zoznam ignorované"
    },
    {
        command: ".gitattributes",
        comment: "// Definuje atribúty pre súbory (konce riadkov, merge stratégia, diff)",
        vars: ["*.txt text eol=lf", "*.png binary", "*.md diff=markdown"],
        category: "git",
        tags: "atribúty konce riadkov binárne"
    },
    {
        command: "git update-index --skip-worktree",
        comment: "// Lokálne ignorovanie zmien v sledovanom súbore (napr. lokálna konfig)",
        vars: ["git update-index --skip-worktree config.local.json"],
        category: "git",
        tags: "index lokálne ignorovanie"
    },
    {
        command: "git update-index --assume-unchanged",
        comment: "// Git predpokladá že súbor sa nezmenil (výkon pri veľkých súboroch)",
        vars: ["git update-index --assume-unchanged velky-subor.dat"],
        category: "git",
        tags: "index nezmenený výkon"
    },

    // =============================================
    // --- SEKCIA: HOOKS ---
    // =============================================
    {
        command: "",
        comment: "Git Hooks – automatizácia",
        vars: [],
        icon: "fa-solid fa-robot",
        color: "#e3b341",
        category: "git",
        tags: "hooks automatizácia skripty"
    },
    {
        command: "pre-commit",
        comment: "// Spustí sa pred každým commitom (lint, testy, formát)",
        vars: [".git/hooks/pre-commit  // shell skript", "exit 1  // zastaví commit pri chybe"],
        category: "git",
        tags: "hook pred commitom"
    },
    {
        command: "commit-msg",
        comment: "// Validuje správu commitu (konvencia, dĺžka...)",
        vars: [".git/hooks/commit-msg  // $1 = cesta k súboru so správou"],
        category: "git",
        tags: "hook správa commitu"
    },
    {
        command: "pre-push",
        comment: "// Spustí sa pred git push (testy, build...)",
        vars: [".git/hooks/pre-push"],
        category: "git",
        tags: "hook pred pushom"
    },
    {
        command: "post-merge",
        comment: "// Spustí sa po úspešnom merge (napr. npm install)",
        vars: [".git/hooks/post-merge"],
        category: "git",
        tags: "hook po merge"
    },
    {
        command: "pre-rebase",
        comment: "// Spustí sa pred začatím rebase",
        vars: [".git/hooks/pre-rebase"],
        category: "git",
        tags: "hook pred rebase"
    },
    {
        command: "Husky",
        comment: "// npm balíček na jednoduché zdieľanie Git hooks v projekte",
        vars: ["npx husky init", "// .husky/pre-commit"],
        category: "git",
        tags: "hook husky npm"
    },

    // =============================================
    // --- SEKCIA: POKROČILÉ PRÍKAZY ---
    // =============================================
    {
        command: "",
        comment: "Pokročilé príkazy",
        vars: [],
        icon: "fa-solid fa-flask",
        color: "#d2a8ff",
        category: "git",
        tags: "pokročilé archive grep filter-branch"
    },
    {
        command: "git grep",
        comment: "// Hľadá reťazec vo verzionovaných súboroch (rýchlejší ako grep)",
        vars: ["git grep 'TODO'", "git grep -n 'function main'  // s číslami riadkov", "git grep 'heslo' HEAD~5      // v konkrétnom commite"],
        category: "git",
        tags: "grep hľadanie kód"
    },
    {
        command: "git archive",
        comment: "// Exportuje strom súborov do archívu (bez .git adresára)",
        vars: ["git archive --format=zip HEAD > export.zip", "git archive --format=tar.gz v1.0.0 > release.tar.gz"],
        category: "git",
        tags: "archive export záloha"
    },
    {
        command: "git bundle",
        comment: "// Zabalí repozitár do jedného prenosného súboru",
        vars: ["git bundle create repo.bundle --all", "git clone repo.bundle kopia"],
        category: "git",
        tags: "bundle záloha prenosný"
    },
    {
        command: "git notes",
        comment: "// Pridá poznámky ku commitom bez zmeny histórie",
        vars: ["git notes add -m 'Poznámka' abc1234", "git notes show abc1234"],
        category: "git",
        tags: "notes poznámky"
    },
    {
        command: "git shortlog -sn",
        comment: "// Počet commitov každého prispievateľa zostupne",
        vars: ["git shortlog -sn", "git shortlog -sn --all"],
        category: "git",
        tags: "štatistiky prispievatelia"
    },
    {
        command: "git count-objects",
        comment: "// Štatistiky o veľkosti repozitára",
        vars: ["git count-objects -vH"],
        category: "git",
        tags: "štatistiky veľkosť"
    },
    {
        command: "git gc",
        comment: "// Garbage collection – optimalizuje lokálny repozitár",
        vars: ["git gc", "git gc --aggressive  // agresívnejšia optimalizácia"],
        category: "git",
        tags: "gc optimalizácia čistenie"
    },
    {
        command: "git fsck",
        comment: "// Skontroluje integritu repozitára",
        vars: ["git fsck", "git fsck --unreachable  // nájde stratené objekty"],
        category: "git",
        tags: "fsck integrita kontrola"
    },
    {
        command: "git ls-files",
        comment: "// Zobrazí súbory sledované Gitom",
        vars: ["git ls-files", "git ls-files --others  // nesledované", "git ls-files --deleted  // vymazané"],
        category: "git",
        tags: "súbory sledované zoznam"
    },
    {
        command: "git rev-parse",
        comment: "// Vráti hash commitu alebo informácie o repozitári",
        vars: ["git rev-parse HEAD", "git rev-parse --short HEAD", "git rev-parse --show-toplevel  // koreňový adresár"],
        category: "git",
        tags: "hash commit informácie"
    },
    {
        command: "git format-patch",
        comment: "// Vytvorí .patch súbory z commitov (na zdieľanie emailom)",
        vars: ["git format-patch -1 HEAD", "git format-patch HEAD~3  // posledné 3 commity"],
        category: "git",
        tags: "patch súbor zdieľanie"
    },
    {
        command: "git apply",
        comment: "// Aplikuje .patch súbor",
        vars: ["git apply zmeny.patch", "git am zmeny.patch  // aplikuje aj s commit info"],
        category: "git",
        tags: "patch aplikácia"
    },

    // =============================================
    // --- SEKCIA: WORKFLOW A KONVENCIE ---
    // =============================================
    {
        command: "",
        comment: "Workflow a konvencie",
        vars: [],
        icon: "fa-solid fa-sitemap",
        color: "#58a6ff",
        category: "git",
        tags: "workflow konvencia gitflow commit správa"
    },
    {
        command: "Conventional Commits",
        comment: "// Konvencia pre štruktúru správ commitov",
        vars: ["feat: pridaná nová funkcia", "fix: oprava chyby #123", "docs: aktualizácia README", "style: formátovanie kódu", "refactor: refaktorizácia bez zmeny správania", "test: pridanie testov", "chore: úprava build systému"],
        category: "git",
        tags: "konvencia správa commit"
    },
    {
        command: "Git Flow vetvy",
        comment: "// Populárna stratégia vetvenia pre tímový vývoj",
        vars: ["main / master  – produkčný kód", "develop        – integračná vetva", "feature/*      – nové funkcie", "release/*      – príprava na vydanie", "hotfix/*       – urgentné opravy produkcie"],
        category: "git",
        tags: "gitflow vetvy stratégia"
    },
    {
        command: "Trunk-based development",
        comment: "// Všetci vývojári pushujú priamo do main/trunk cez krátke feature vetvy",
        vars: ["main            – jediná dlhodobá vetva", "feature/*       – krátkodobé (hodiny-dni)", "feature flags   – vypínanie nedokončených funkcií"],
        category: "git",
        tags: "workflow trunk stratégia"
    },
    {
        command: ".github/pull_request_template.md",
        comment: "// Šablóna pre Pull Requesty na GitHub",
        vars: ["## Čo táto zmena robí?", "## Ako testovať?", "## Screenshots", "## Checklist"],
        category: "git",
        tags: "github PR šablóna"
    },
    {
        command: "CHANGELOG.md",
        comment: "// Súbor sledujúci zmeny medzi verziami",
        vars: ["## [Unreleased]", "## [1.0.0] - 2024-01-01", "### Added", "### Fixed", "### Changed"],
        category: "git",
        tags: "changelog verzia"
    },
    {
        command: "Sémantické verzionovanie (SemVer)",
        comment: "// Konvencia verzovania: MAJOR.MINOR.PATCH",
        vars: ["MAJOR – nekompatibilná zmena API", "MINOR – nová spätne kompatibilná funkcia", "PATCH – spätne kompatibilná oprava chyby", "Príklad: 2.1.3 → 2.1.4 (patch), 2.2.0 (minor)"],
        category: "git",
        tags: "semver verzionovanie"
    },

    // =============================================
    // --- SEKCIA: GIT NA GITHUBE / GITLABE ---
    // =============================================
    {
        command: "",
        comment: "GitHub / GitLab špecifické",
        vars: [],
        icon: "fa-brands fa-github",
        color: "#8b949e",
        category: "git",
        tags: "github gitlab PR fork actions"
    },
    {
        command: "Fork + Pull Request workflow",
        comment: "// Štandardný open-source príspevok",
        vars: ["1. Fork repozitára na GitHube", "2. git clone <tvoj-fork>", "3. git remote add upstream <original>", "4. git switch -c feature/zmena", "5. commit + push na tvoj fork", "6. Otvor Pull Request na GitHube"],
        category: "git",
        tags: "github fork PR workflow"
    },
    {
        command: "gh pr create",
        comment: "// GitHub CLI – vytvorí Pull Request z terminálu",
        vars: ["gh pr create --title 'Názov' --body 'Popis'", "gh pr create --draft  // draft PR"],
        category: "git",
        tags: "github cli PR"
    },
    {
        command: "gh pr checkout",
        comment: "// GitHub CLI – stiahne a prepne na vetvu PR",
        vars: ["gh pr checkout 42  // číslo PR"],
        category: "git",
        tags: "github cli PR checkout"
    },
    {
        command: "gh repo clone",
        comment: "// GitHub CLI – klonuje repozitár",
        vars: ["gh repo clone user/repo"],
        category: "git",
        tags: "github cli clone"
    },
    {
        command: "gh release create",
        comment: "// GitHub CLI – vytvorí nový release",
        vars: ["gh release create v1.0.0 --title 'v1.0.0' --notes 'Release notes'"],
        category: "git",
        tags: "github cli release"
    },
    {
        command: "Squash and merge",
        comment: "// Zlúčenie PR – všetky commity sa zlúčia do jedného na main",
        vars: ["Nastavenie v GitHub repo: Settings → General → Merge button"],
        category: "git",
        tags: "github merge squash PR"
    },
    {
        command: "Branch protection rules",
        comment: "// Ochrana vetvy pred priamym pushom a vynútenie PR + review",
        vars: ["Settings → Branches → Add protection rule", "✅ Require pull request reviews", "✅ Require status checks", "✅ Require linear history"],
        category: "git",
        tags: "github ochrana vetva pravidlá"
    },
];