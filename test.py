HOME_TEAM_WON = 1

def tournamentWrinner(competitions, results):
    currentBestTeam = ""
    scores = {currentBestTeam: 0}

    for idx, competition in enumerate(competitions):
        result = results[idx]
        homeTeam, awayTeam = result
        
        winnnigTeam = homeTeam if result == HOME_TEAM_WON else awayTeam
        
        updateScores(winnnigTeam, 3, scores)

        if scores[winnnigTeam] > scores[currentBestTeam]:
            currentBestTeam = winnnigTeam
            
    return currentBestTeam

def updateScores(team, points, scores):
    if team not in scores:
        scores[team] = 0
    
    scores[team] += points
    


        


        
    

