FROM ubuntu:16.04

RUN apt-get update && apt-get -y upgrade && DEBIAN_FRONTEND=noninteractive apt-get -y install \
 apache2 php7.0 php7.0-mysql libapache2-mod-php7.0 curl lynx-cur


#copy des config des sites 
COPY showcase/green-r.be.conf /etc/apache2/site-available/green-r.be.conf

#copy du site
COPY showcase/html /var/www/default/html

#delete default apache website
RUN rm /etc/apache2/sites-enabled/000-default.conf /etc/apache2/sites-available/000-default.conf 

# activer mod apache
RUN a2enmod php7.0
RUN a2enmod rewrite




#activer sites
RUN ln -s /etc/apache2/site-available/green-r.be.conf  /etc/apache2/sites-enabled/


EXPOSE 80 443
CMD ["apachectl", "-D", "FOREGROUND"]

