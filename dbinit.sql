BEGIN TRANSACTION;
INSERT INTO reasons (shortdesc, fulldesc) VALUES ("Disabled", 'I identify as disabled (* if unsure, see below for our approach to defining "disability")');
INSERT INTO reasons (shortdesc, fulldesc) VALUES ("Has disabling condition", "I experience one or more disabling conditions, though I don't use the word ""disabled"" to describe myself.");
INSERT INTO reasons (shortdesc, fulldesc) VALUES ("Questioning", "I don't know/I'm questioning whether I might have a disability (e.g. There's something I'm trying to figure out about myself, I'm not getting good answers for it yet, and I believe that I may get better suggestions or ideas from disabled people)");
INSERT INTO reasons (shortdesc, fulldesc) VALUES ("Not disabled", 'I am not disabled in any way (e.g. I am a non-disabled ally; I am a non-disabled recruiter hoping to connect with the community, etc.)');
INSERT INTO reasons (shortdesc, fulldesc, extradesc) VALUES ("Other", "I prefer to self-describe (please explain)", "Self-description information");
COMMIT;
