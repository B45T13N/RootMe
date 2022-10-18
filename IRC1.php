<?php
        set_time_limit(0);
        $result = 0 ;
        $socket = fsockopen('irc.root-me.org','6667');
 
        // Vérification de la bonne connexion :
        if(!$socket)
        {
                // Si on n'a pas réussi, on affiche un message d'erreur et on quitte.
                echo 'Impossible de se connecter';
                exit;
        }
       
        fputs($socket,"USER Bla Bla Bla Bla\r\n");
        fputs($socket,"NICK Dewey7577 \r\n");
       
        $continuer = 1; // On initialise une variable permettant de savoir si on doit continuer la boucle.
        while($continuer) // Boucle principale.
        {
 
                $donnees = fgets($socket, 1024); // Le 1024 permet de limiter la quantité de caractères à recevoir du serveur.
                $retour = explode(':',$donnees); // On sépare les différentes données.
       
                // On regarde si c'est un PING, et, le cas échéant, on envoie notre PONG :
                if(rtrim($retour[0]) == 'PING')
                {
                        fputs($socket,'PONG :'.$retour[1]);
                        $continuer = 0;
                }
                 if($donnees)
                {
                        echo $donnees; 
                }
        }
        echo("C'est parti \r\n") ;
 
        fputs($socket,"JOIN #Root-Me_Challenge\r\n");
       
        fputs($socket,"PRIVMSG Candy !ep1 \r\n");
       
        echo("Cela fonctionne t-il ?") ;
        fputs($socket,"TIME \r\n");
        $is_answered = false;
        while($is_answered != true)
        {
                $donnees = fgets($socket,1024);
                if($donnees)
                {
                        echo $donnees;
                        $commande = explode(' ',$donnees);
                        $message = explode(':',$donnees);
                        if($commande[0] == 'PING') // Si c'est un PING, on renvoie un PONG.
                        {
                                fputs($socket,"PONG ".$commande[1]."\r\n");
                        }
                        if($commande[1] == 'PRIVMSG') // Si oui alors on a un message privé
                        {
                                echo($message[2]); // On affiche le message reçu par Candy
                                $nbr=explode(" / ", $message[2]); // On sépare la réponse en deux éléments
                                $nbr[0] = sqrt($nbr[0]); // Racine carré du premier nombre
                                $result = ($nbr[0] * $nbr[1]); // Multiplication des deux nombres
                                $result = round($result, 2); // On arrondit le résultat à 2 chiffres après la virgule
                                fputs($socket, "PRIVMSG Candy !ep1 -rep ".$result."\r\n"); // Et on envoie la réponse à Candy                                
                        }
                }
        }
?>
