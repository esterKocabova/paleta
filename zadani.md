V souboru palettes.js najdete připravená data pro další barevné palety, které budeme na stránce chtít zobrazit. Importujte si toto pole s daty do hlavního index.jsx, abychom s ním mohli dále pracovat.

Nejprve vybereme pouze první paletu v poli palettes a zobrazíme její barvy. Vezměte pole barev z této první palety a pomocí funkce map zobrazte všechny barvy přímo v komponentě App. Jako key použijte kód barvy.

Udělejte v komponentě App totéž i pro druhou paletu.

Vyrobíme si komponentu pro zobrazení jedné barvy. V samostatné složce vytvořte komponentu SchemeColor, která jako prop obdrží hodnotu barvy a vykreslí příslušný div s barvou pozadí a kódem. Do složky této komponenty vložte související styly ze souboru style.css. Použijte tuto komponentu uvnitř obou volání funkce map v souboru index.jsx.
Nyní jsme připraveni vyrobit komponentu pro celou paletu. Opět v samostatné složce vytvořte komponentu Palette, která jako prop s názvem paletteData obdrží objekt z pole palettes. Do komponenty přesuňte veškerý kód týkající se vykreslení palety a opět do složky s komponentou přesuňte příslušné styly.
V komponentě si dejte pozor na to, že máme dva druhy palet: vertikální a horizontální. Sestavte tedy v komponentě správně název příslušné CSS třídy podle toho, jaký typ palety zrovna zobrazujeme.
V komponentě App pomocí metody map zobrazte všechny palety z pole palettes. Jako key můžete použít název palety, který je vždy unikátní.
Na stránce byste měli vidět všechny palety se správnými barvami a obrázky, orientací, popiskem a fungujícím proklikem na autora obrázku. Otestujte, že všechny tyto náležitosti správně fungují.