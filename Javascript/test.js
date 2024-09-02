function extractPathAndSigRule(query) {
    // Patterns to match the path and sigrule
    const pathPattern = /path\s*=\s*('.*?'|\/[^\s]+)/;
    const sigrulePattern = /sigrule\s*=\s*(?:'rule\s+(\S+)\s*[^']*'|rule\s+(\S+)\s*[^']*)/;

    // Search for matches in the query
    const pathMatch = query.match(pathPattern);
    const sigruleMatch = query.match(sigrulePattern);

    // Extract and clean the path and sigrule values
    if (pathMatch && sigruleMatch) {
        const path = pathMatch[1].replace(/^'/, '').replace(/'$/, '');
        const sigrule = sigruleMatch[1] || sigruleMatch[2];
        return { path, sigrule };
    } else {
        return { path: null, sigrule: null };
    }
}

// Example dynamic queries
const query1 = `SELECT * FROM yara WHERE path = 'C:Program Files' and sigrule = 'rule Win32_Trojan_BiBiWiper : tc_detection malicious'`;
const query2 = `SELECT * FROM yara WHERE path = 'C:Program Files' and sigrule = 'rule Win32_Trojan_BiBiWiper : tc_detection malicious
{
    meta:

        author              = 'ReversingLabs'

        source              = 'ReversingLabs'
        status              = 'RELEASED'
        sharing             = 'TLP:WHITE'
        category            = 'MALWARE'
        malware             = 'BIBIWIPER'
        description         = 'Yara rule that detects BiBiWiper trojan.'

        tc_detection_type   = 'Trojan'
        tc_detection_name   = 'BiBiWiper'
        tc_detection_factor = 5

    strings:

        $delete_shadow_copies_p1 = {
            48 89 5C 24 ?? 55 48 8D'`;
const query3 = `SELECT * FROM yara where path = /home/ and sigrule = rule Linux_Trojan_AcidRain : tc_detection malicious`;

// Extract path and sigrule
const result1 = extractPathAndSigRule(query1);
const result2 = extractPathAndSigRule(query2);
const result3 = extractPathAndSigRule(query3);

// Print the results
console.log(`Path: ${result1.path}, SigRule: ${result1.sigrule}`);
console.log(`Path: ${result2.path}, SigRule: ${result2.sigrule}`);
console.log(`Path: ${result3.path}, SigRule: ${result3.sigrule}`);
