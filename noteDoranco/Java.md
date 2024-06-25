

## <font color="#ffc000">Intro</font>
### <font color="#00b050">5 concepts <span style="background:#fff88f">POO</span> (Programmation Orientées Objet ) : </font>
1.  L'encapsulation
2.  L'héritage
3.  Redéfinition
4.  Surcharge
5.  Polymorphisme

### <font color="#00b050">4 Niveaux de visibilités pour les attributs, les méthodes et les classes :</font>

<span style="background:#fff88f">Protected</span> : L'attribut ou la méthode n'est visible que par les classes présentes dans le même dossier (package) et les classes filles. Pas applicable pour les classes. 
<span style="background:#fff88f">Default</span> : Visible uniquement dans le même projet. Il n'est pas nécessaire de le préciser pour les attributs, les méthodes et les classes car sans précision c'est ce qui est appliqué par défaut. 
<span style="background:#fff88f">Public </span>: Visible même depuis un autre projet. 
<span style="background:#fff88f">Private</span> : Visible par personne, uniquement dans la classe où il se trouve. Ca ne s'applique pas pour les classes, seulement pour les attributs.

|                                    | ***<font color="#ffff00">private</font>***              | <font color="#ffff00">**protected**</font>                                            | **<font color="#ffff00">default</font>**                                    | **<font color="#ffff00">public</font>** |
| ---------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------- |
| <center>attribut/ methode</center> | <center>visible dans la classe où il se trouve</center> | <center>visible par toutes les classes du même package et des classes filles</center> | <center>visible par toutes les classes du projet où elle se trouve</center> | <center>visible par tous</center>       |
| <center>classe</center>            | <center>non concerné</center>                           | <center>non concerné</center>                                                         | <center>//</center>                                                         | <center>//</center>                     |

#### <font color="#e36c09">Héritage :</font>
class X extends Y : La classe X hérite des attributs et méthodes de la classe Y. 
Si rien n'est précisé, la classe hérite par défaut de la classe Object, c'est la classe mère de toute la librairie et donc de toutes les classes de Java. Aucune classe n'a aucun héritage. Au minimum une classe hérite de la classe Object.

#### <font color="#e36c09">Package :</font> 
C'est un dossier qui contient des classes Nom de package est unique. Nommage obligatoire :
1.  Que des lettres de a-z en minuscule, rarement des chiffres pour un numéro de version éventuellement et des "."
2.  1ères lettres du pays + "." + nom de la société + "." + éventuellement de la filiale + "." + nom du projet + "."
<font color="#00b0f0">Exemple</font> <font color="#00b0f0">: fr.doranco.nomprojet.vue</font>
Au niveau des répertoires on aura src avec des packages dedans, ressources avec des packages dedans (images, html, PDF,...). 
Si on a un projet sans module c'est le projet lui-même qui est le seul module avec les classes dedans.

##### <span style="background:#ff4d4f"> !!!!! </span> 
Pour tous les projets faire 4 dossiers. Avant aller sur src puis clic droit / Build path / Remove from build. cela permet de ne pas identifier src comme répertoire source (ça lui enlève le carré marron). Ensuite clic droit sur le projet / New / source folder puis créer un répertoire src/main/java
Ensuite on aura 4 dossiers au total pour l'appli en créant les 3 autres :
- src/main/resources
- src/test/java
- src/test/resources

### <font color="#00b050">POO</font>


## <font color="#ffc000">Perfectionement</font>
M = Model => Stockage
V = Vue => Template
C = Controller

## [[Java Hibernate]]
